import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message?:String;
  constructor(private service:LoginServiceService){}
  
  ngOnInit(): void{
    this.message = this.service.getMessage();
  }
}
