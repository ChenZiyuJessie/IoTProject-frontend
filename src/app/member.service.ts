import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export interface Members {
   room: string;
   membername: string;
   mail: string;
   _id?: string;
   tel: string;
   credit: string;
  creation_dt: string;


}

@Injectable()
export class MemberService {

    constructor(private _http: HttpClient) { }

    memberadd(body: any) {
      return this._http.post('http://127.0.0.1:3000/api/members/memberadd', body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }

    getmember() {
      return this._http.get('http://127.0.0.1:3000/api/members/member', {
            observe: 'body',
            withCredentials: true,
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });

    }

    deletemember(id: string) {
      return this._http.delete('http://127.0.0.1:3000/api/members/member/' + id, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    topUp(id: string,body:any) {
      return this._http.put('http://127.0.0.1:3000/api/members/update/' + id,body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  updatemember(id:string,body:any) {
    return this._http.put('http://127.0.0.1:3000/api/members/update/' + id, body,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
