import { Injectable } from '@angular/core';
import { AuthRequest } from '../../model/auth-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  user: string; 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  
  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  setToken(token: string) {
    console.log("->",token);
    localStorage.setItem("authToken", token);
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("authToken")){
      return true;
    }
    return false;
  }

  login(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/login', authRequest);
  }

  register(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/register', authRequest);
  }

  logout(){
    localStorage.removeItem("authToken");
  }
  getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        return decoded.user;
      } catch (error) {
        console.error('Invalid token format:', error);
        return null;
      }
    }
    return null;
  }
}
