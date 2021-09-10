import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://ta-sys-online-server.azurewebsites.net';
  fetchUser(page: number, size: number): Observable<User> {
    const params = new HttpParams()
      .set('PageNumber', page)
      .set('PageSize', size);
    console.log(params.toString());
    return this.http.get<User>(this.apiUrl + '/api/UserAccount/paging', {
      params: params,
      reportProgress: true,
      observe: 'body',
    });
  }

  fetchUserByLearnerID(
    page: number,
    size: number,
    id: string
  ): Observable<User> {
    const params = new HttpParams()
      .set('PageNumber', page)
      .set('PageSize', size)
      .set('Id', id);
    console.log(params.toString());
    return this.http.get<User>(this.apiUrl + '/byLearnerID', {
      params: params,
      reportProgress: true,
      observe: 'body',
    });
  }

  searchUserByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ): Observable<User> {
    const params = new HttpParams()
      .set('Property', property)
      .set('Value', value)
      .set('PageNumber', page)
      .set('PageSize', size);
    console.log(params.toString());
    return this.http.get<User>(this.apiUrl + '/api/UserAccount/search', {
      params: params,
      reportProgress: true,
      observe: 'body',
    });
  }

  filterUserByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ): Observable<User> {
    const params = new HttpParams()
      .set('Value', value)
      .set('Property', property)
      .set('PageNumber', page)
      .set('PageSize', size);
    console.log(params.toString());
    return this.http.get<User>(this.apiUrl + '/api/UserAccount/filter', {
      params: params,
      reportProgress: true,
      observe: 'body',
    });
  }

  sortUserByProperty(
    value: string,
    order: string,
    page: number,
    size: number
  ): Observable<User> {
    const params = new HttpParams()
      .set('SortBy', value)
      .set('Order', order)
      .set('PageNumber', page)
      .set('PageSize', size);
    console.log(params.toString());
    return this.http.get<User>(this.apiUrl + '/api/UserAccount/paging', {
      params: params,
      reportProgress: true,
      observe: 'body',
    });
  }

  uploadUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/api/UserAccount', user, {
      reportProgress: true,
      observe: 'body',
    });
  }

  generateRandomUser(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/randomUser', {
      reportProgress: true,
      observe: 'body',
    });
  }

  deleteUser(id: Array<string>): Observable<Object> {
    return this.http.post<Object>(this.apiUrl + '/api/UserAccount/delete', id, {
      reportProgress: true,
      observe: 'body',
    });
  }

  deleteAll(): Observable<ArrayBuffer> {
    return this.http.delete<ArrayBuffer>(this.apiUrl + '/api/UserAccount', {
      reportProgress: true,
      observe: 'body',
    });
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + `/api/UserAccount/${id}`, {
      reportProgress: true,
      observe: 'body',
    });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/api/UserAccount', user, {
      reportProgress: true,
      observe: 'body',
    });
  }

  fetchAll(): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/api/UserAccount', {
      reportProgress: true,
      observe: 'body',
    });
  }

  fetchRole(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/Role', {
      reportProgress: true,
      observe: 'body',
    });
  }

  loginUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.apiUrl + '/api/Authenticate/login', user, {
        reportProgress: true,
        observe: 'body',
      })
      .pipe(shareReplay());
  }

  logoutUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/logout', user, {
      reportProgress: true,
      observe: 'body',
    });
  }

  changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + `/api/UserAccount/${userId}/password`,
      { oldPassword: oldPassword, newPassword: newPassword },
      {
        reportProgress: true,
        observe: 'body',
      }
    );
  }
}
