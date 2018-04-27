import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { error } from 'util';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

   members=[];
     constructor(private http: HttpClient, private _member: MemberService, private _router: Router) { }


  ngOnInit() {
    this.getmember();
  }
  getmember() {
    this._member.getmember().subscribe(
     data=>{
       console.log(data);
     },
    error=>{
      console.log(error);
    }
  )
     }
    }