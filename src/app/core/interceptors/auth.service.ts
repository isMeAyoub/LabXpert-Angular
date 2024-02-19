// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  // api url make the data passed by the x-www-form-urlencoded
  apiUrl = 'http://localhost:9090';

  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${this.apiUrl}/login`, body.toString(), options).pipe(
      tap((response: any) => {
        localStorage.setItem('jwtToken', response.token);
        this.jwtTokenSubject.next(response.token);
      })
    );
  }

  refreshToken(): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${this.apiUrl}/refreshToken`, {}, options).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.access_token);
        localStorage.setItem('refreshToken', response.refresh_token);
        this.jwtTokenSubject.next(response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.jwtTokenSubject.next(null);
  }

  getJwtToken(): Observable<string | null> {
    return this.jwtTokenSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('accessToken') !== null;
  }
}
