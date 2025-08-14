import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  //login
  login(username: string, password: string): Observable<any> {    
    const body = {username, password}
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  //obtiene todos los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //obtiene un usuario por id
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //agrega un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  //actualiza un usuario existente
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  //elimina un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
