import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberadd',
  templateUrl: './memberadd.component.html',
  styleUrls: ['./memberadd.component.css']
})
export class MemberaddComponent implements OnInit {

  addMemberForm: FormGroup = new FormGroup({
    room: new FormControl(null, Validators.required),
    membername: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    tel:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })

  constructor(private forBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
  }

  memberadd() {
    if (!this.addMemberForm.valid) {
      console.log('Invalid'); return;
    }

    
  }
}
