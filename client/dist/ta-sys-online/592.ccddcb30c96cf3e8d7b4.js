(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[592],{76659:(e,t,r)=>{"use strict";r.d(t,{e:()=>i});var s=r(8619),o=r(25567);let i=(()=>{class e{constructor(e){this.userService=e}sendLoginRequest(e){this.userService.loginUser(e)}sendRegisterRequest(e){this.userService.signupUser(e)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(o.U))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},63376:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var s=r(42693),o=r(8619);let i=(()=>{class e{constructor(e){this.http=e,this.apiUrl="https://ta-sys-online-server.azurewebsites.net/api/Post"}fetchPost(e,t){const r=(new s.LE).set("PageNumber",e).set("PageSize",t);return console.log(r.toString()),this.http.get(this.apiUrl+"/paging",{params:r,reportProgress:!0,observe:"body"})}fetchPostByLearnerID(e,t,r){const o=(new s.LE).set("PageNumber",e).set("PageSize",t).set("Id",r);return console.log(o.toString()),this.http.get(this.apiUrl+"/byLearnerID",{params:o,reportProgress:!0,observe:"body"})}searchPostByProperty(e,t,r,o){const i=(new s.LE).set("Property",e).set("Value",t).set("PageNumber",r).set("PageSize",o);return console.log(i.toString()),this.http.get(this.apiUrl+"/search",{params:i,reportProgress:!0,observe:"body"})}filterPostByProperty(e,t,r,o){const i=(new s.LE).set("Value",t).set("Property",e).set("PageNumber",r).set("PageSize",o);return console.log(i.toString()),this.http.get(this.apiUrl+"/filter",{params:i,reportProgress:!0,observe:"body"})}sortPostByProperty(e,t,r,o){const i=(new s.LE).set("SortBy",e).set("Order",t).set("PageNumber",r).set("PageSize",o);return console.log(i.toString()),this.http.get(this.apiUrl+"/paging",{params:i,reportProgress:!0,observe:"body"})}uploadPost(e){return this.http.post(this.apiUrl,e,{reportProgress:!0,observe:"body"})}generateRandomPost(){return this.http.post(this.apiUrl+"/randomPost",{reportProgress:!0,observe:"body"})}deletePost(e){return this.http.post(this.apiUrl+"/delete",e,{reportProgress:!0,observe:"body"})}deleteAll(){return this.http.delete(this.apiUrl,{reportProgress:!0,observe:"body"})}getPost(e){return this.http.get(this.apiUrl+`/${e}`,{reportProgress:!0,observe:"body"})}updatePost(e){return this.http.put(this.apiUrl,e,{reportProgress:!0,observe:"body"})}fetchAll(){return this.http.get(this.apiUrl,{reportProgress:!0,observe:"body"})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(s.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);