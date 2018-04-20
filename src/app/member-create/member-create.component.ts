import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  member={};

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  saveMember(){
    this.http.post('./user',this.member)
    .subscribe(res=>{
      let id = res['_id'];
      this.router.navigate(['./member-details',id]);
    },(err)=>{
      console.log(err);
  
    });


  }


}
