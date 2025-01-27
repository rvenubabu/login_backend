import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../services/login-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  constructor(private service:LoginServiceService){}

  userForm :FormGroup = new FormGroup({
    userName:new FormControl(''),
    password: new FormControl('')
  });

  router =inject(Router);
  user: User = new User();

  doLogin(){
    const formValue = this.userForm.value;

    if(formValue.userName == '' || formValue.password == ''){
      alert('Wrong Credentials');
      return;
    }

    this.user.userName = formValue.userName;
    this.user.password = formValue.password;
    
    this.service.doLogin(this.user).subscribe({
      next:(res) => {
        console.log("received response: "+ res.response);
        this.service.setmessage(res.response);
        this.router.navigateByUrl('home');
      }, error: (err) => {
        console.log("error received: "+ err);
      }
    })

  }



}
