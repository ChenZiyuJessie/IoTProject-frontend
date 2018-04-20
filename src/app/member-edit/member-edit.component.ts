import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  member:any={};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMember(this.route.snapshot.params['id']);
  }

  getMember(id) {
    this.http.get('/user/' + id).subscribe(data => {
      this.member = data;
    });
  }
  updateBook(id) {
    this.member.updated_date = Date.now();
    this.http.put('/user/' + id, this.member)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/member-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}