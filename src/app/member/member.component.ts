import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { Members } from '../members';
import { error } from 'util';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  private members: Members[];
  constructor(private http: HttpClient, private _member: MemberService, private _router: Router) { }


  ngOnInit() {
    this.getmember();
  }
  getmember() {
    this._member.getmember().subscribe(
      data => {
        console.log(data);
        this.members = data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }

  doDelete(member){
    this._member.deletemember(member._id).subscribe(
      data=>{
        this.members.splice(this.members.indexOf(member),1);
      },
      error=>{
        console.log(error);
      }
    )
  }
}