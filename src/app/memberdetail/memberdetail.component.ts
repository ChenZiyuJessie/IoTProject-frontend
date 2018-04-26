import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberdetail',
  templateUrl: './memberdetail.component.html',
  styleUrls: ['./memberdetail.component.css']
})
export class MemberdetailComponent implements OnInit {

  members=[];

  constructor(private http:HttpClient,private _member:MemberService ,private route:Router) { }

  ngOnInit() {

  }

}