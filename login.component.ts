import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 users : any[];
 constructor(db:AngularFireDatabase)
 {
  db.list("/User1").subscribe(users => {
    this.users = users ;
    console.log(this.users);
  });
 }

onFrmSub(myFrm?: NgForm) {
    console.log(myFrm.value);
  }

  ngOnInit() {
  }

}
