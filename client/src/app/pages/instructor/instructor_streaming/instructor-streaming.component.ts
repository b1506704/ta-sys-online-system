import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SignalrService } from 'src/app/shared/services/streaming/signalr.service';
import { signalRConfig } from 'src/app/shared/services/streaming/signalr.config';

@Component({
  templateUrl: 'instructor-streaming.component.html',
  styleUrls: ['./instructor-streaming.component.scss'],
})
export class InstructorStreamingComponent implements OnInit, OnDestroy {
  @ViewChild('localVideo') localVideo: ElementRef;
  @ViewChild('remoteVideo') remoteVideo: ElementRef;

  localStream: MediaStream;
  remoteStream: MediaStream;

  room: any = {
    name: '',
  };
  submitInstructorButtonOptions: any = {
    text: 'Submit',
    icon: 'save',
    type: 'normal',
    useSubmitBehavior: true,
  };
  resetInstructorButtonOptions: any = {
    text: 'Reset',
    icon: 'refresh',
    type: 'normal',
    useSubmitBehavior: false,
    onClick: () => {
    },
  };
  peerConnection: RTCPeerConnection;

  isInitiator: boolean;
  isChannelReady: boolean;
  isStarted: boolean;

  constructor(private signaling: SignalrService) {}

  onSubmit(e:any) {
    e.preventDefault();
    this.start();
  }

  ngOnInit(): void {   
    this.signaling.connect('/auth', false).then(() => {
      if (this.signaling.isConnected()) {
        this.signaling.invoke('Authorize').then((token: string) => {
          if (token) {
            sessionStorage.setItem('token', token);
            // this.start();
          }
        });
      }
    });
  }

  start(): void {
    // #1 connect to signaling server
    this.signaling.connect('/signaling', true).then(() => {
      if (this.signaling.isConnected()) {
        this.signaling.invoke('CreateOrJoinRoom', this.room.name);
      }
    });

    // #2 define signaling communication
    this.defineSignaling();

    // #3 get media from current client
    this.getUserMedia();
  }

  defineSignaling(): void {
    this.signaling.define('log', (message: any) => {
      console.log(message);
    });

    this.signaling.define('created', () => {
      this.isInitiator = true;
    });

    this.signaling.define('joined', () => {
      this.isChannelReady = true;
    });

    this.signaling.define('message', (message: any) => {
      if (message === 'got user media') {
        this.initiateCall();
      } else if (message.type === 'offer') {
        if (!this.isStarted) {
          this.initiateCall();
        }
        this.peerConnection.setRemoteDescription(
          new RTCSessionDescription(message)
        );
        this.sendAnswer();
      } else if (message.type === 'answer' && this.isStarted) {
        this.peerConnection.setRemoteDescription(
          new RTCSessionDescription(message)
        );
      } else if (message.type === 'candidate' && this.isStarted) {
        this.addIceCandidate(message);
      } else if (message === 'bye' && this.isStarted) {
        this.handleRemoteHangup();
      }
    });
  }

  getUserMedia(): void {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream: MediaStream) => {
        this.addLocalStream(stream);
        this.sendMessage('got user media');
        if (this.isInitiator) {
          this.initiateCall();
        }
      })
      .catch((e) => {
        alert('getUserMedia() error: ' + e.name + ': ' + e.message);
      });
  }

  initiateCall(): void {
    console.log('Initiating a call.');
    if (!this.isStarted && this.localStream && this.isChannelReady) {
      this.createPeerConnection();

      this.peerConnection.addTrack(
        this.localStream.getVideoTracks()[0],
        this.localStream
      );
      this.peerConnection.addTrack(
        this.localStream.getAudioTracks()[0],
        this.localStream
      );

      this.isStarted = true;
      if (this.isInitiator) {
        this.sendOffer();
      }
    }
  }

  createPeerConnection(): void {
    console.log('Creating peer connection.');
    try {
      this.peerConnection = new RTCPeerConnection({
        iceServers: signalRConfig.iceServers,
        sdpSemantics: 'unified-plan',
      } as RTCConfiguration);

      this.peerConnection.onicecandidate = (
        event: RTCPeerConnectionIceEvent
      ) => {
        if (event.candidate) {
          this.sendIceCandidate(event);
        } else {
          console.log('End of candidates.');
        }
      };

      this.peerConnection.ontrack = (event: RTCTrackEvent) => {
        if (event.streams[0]) {
          this.addRemoteStream(event.streams[0]);
        }
      };
    } catch (e) {
      console.log('Failed to create PeerConnection.', e.message);
      return;
    }
  }

  sendOffer(): void {
    console.log('Sending offer to peer.');
    this.addTransceivers();
    this.peerConnection.createOffer().then((sdp: RTCSessionDescriptionInit) => {
      this.peerConnection.setLocalDescription(sdp);
      this.sendMessage(sdp);
    });
  }

  sendAnswer(): void {
    console.log('Sending answer to peer.');
    this.addTransceivers();
    this.peerConnection.createAnswer().then((sdp: RTCSessionDescription) => {
      this.peerConnection.setLocalDescription(sdp);
      this.sendMessage(sdp);
    });
  }

  addIceCandidate(message: any): void {
    console.log('Adding ice candidate.');
    const candidate = new RTCIceCandidate({
      sdpMLineIndex: message.label,
      candidate: message.candidate,
    });
    this.peerConnection.addIceCandidate(candidate);
  }

  sendIceCandidate(event: RTCPeerConnectionIceEvent): void {
    console.log('Sending ice candidate to remote peer.');
    this.sendMessage({
      type: 'candidate',
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate,
    });
  }

  sendMessage(message): void {
    this.signaling.invoke('SendMessage', message, this.room.name);
  }

  addTransceivers(): void {
    console.log('Adding transceivers.');
    const init = {
      direction: 'recvonly',
      streams: [],
      sendEncodings: [],
    } as RTCRtpTransceiverInit;
    this.peerConnection.addTransceiver('audio', init);
    this.peerConnection.addTransceiver('video', init);
  }

  addLocalStream(stream: MediaStream): void {
    console.log('Local stream added.');
    this.localStream = stream;
    this.localVideo.nativeElement.srcObject = this.localStream;
    this.localVideo.nativeElement.muted = 'muted';
  }

  addRemoteStream(stream: MediaStream): void {
    console.log('Remote stream added.');
    this.remoteStream = stream;
    this.remoteVideo.nativeElement.srcObject = this.remoteStream;
    this.remoteVideo.nativeElement.muted = 'muted';
  }

  hangup(): void {
    console.log('Hanging up.');
    this.stopPeerConnection();
    this.sendMessage('bye');
    this.signaling.invoke('LeaveRoom', this.room.name);
    setTimeout(() => {
      this.signaling.disconnect();
    }, 1000);
  }

  handleRemoteHangup(): void {
    console.log('Session terminated by remote peer.');
    this.stopPeerConnection();
    this.isInitiator = true;
    // this.snack.open('Remote client has left the call.', 'Dismiss', { duration: 5000 });
  }

  stopPeerConnection(): void {
    this.isStarted = false;
    this.isChannelReady = false;
    if (this.peerConnection) {
      this.peerConnection.close();
      this.peerConnection = null;
    }
  }

  ngOnDestroy(): void {
    this.hangup();
    if (this.localStream && this.localStream.active) {
      this.localStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    if (this.remoteStream && this.remoteStream.active) {
      this.remoteStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}
