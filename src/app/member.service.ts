import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class MemberService {

  constructor(private _http: HttpClient) { }

  memberadd(body: any) {
    return this._http.post('http://127.0.0.1:3000/members/memberadd', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getmember() {
    return this._http.get('http://127.0.0.1:3000/members/member', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }

  deletemember(id: string) {
    return this._http.delete('http://127.0.0.1:3000/members/member/'+id, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

