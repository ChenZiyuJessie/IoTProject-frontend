import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
    a:number= 0.259;


 
  constructor() {
  
  }
 
  ngOnInit() {
  }

  
}
