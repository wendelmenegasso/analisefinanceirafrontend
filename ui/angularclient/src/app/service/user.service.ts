import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of } from 'rxjs'

@Injectable()
export class UserService {

  private authenticateUrl: string;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://127.0.0.1:9090/users';
    this.authenticateUrl = 'http://127.0.0.1:9090/login';
      //this.usersUrl = 'http://192.168.15.101:9090/users';
      //this.authenticateUrl = 'http://192.168.15.101:9090/authenticate';
      //this.usersUrl = 'http://20.124.3.145:9090/users';
      //this.authenticateUrl = 'http://20.124.3.145:9090/authenticate';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public authenticate(user: User) : Observable<User> {
    return this.http.post<User>(this.authenticateUrl, user);
  }

}
