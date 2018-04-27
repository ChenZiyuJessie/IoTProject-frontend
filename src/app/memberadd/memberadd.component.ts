import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-memberadd',
  templateUrl: './memberadd.component.html',
  styleUrls: ['./memberadd.component.css']
})
export class MemberaddComponent implements OnInit {

  addMemberForm: FormGroup = new FormGroup({
    room: new FormControl( null,Validators.required),
    membername: new FormControl(null, Validators.required),
    email: new FormControl(null,Validators.required),
    tel:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })

  constructor(private formBuilder:FormBuilder,
              private _route:Router,
              private _memberService:MemberService) { }

  ngOnInit() {
  }

  memberadd() {
    if (!this.addMemberForm.valid) {
      console.log('Invalid'); return;
    }

    this._memberService.memberadd(JSON.stringify(this.addMemberForm.value))
      .subscribe(
        data => { console.log(data); this._route.navigate(['/member']); },
        error => console.error(error)
      )
    
      }
}
