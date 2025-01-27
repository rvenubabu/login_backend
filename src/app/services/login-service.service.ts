import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { LoginResponse } from '../login-response';

const API_URL = "http://localhost:8082/api/doLogin";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  message?:String;
  constructor(private http:HttpClient) { }

  doLogin(reqiest: User):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(API_URL,reqiest);
  }

  setmessage(data: String | undefined)
  {
    this.message = data;
  }

  getMessage()
  {
    return this.message;
  }
}
