import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users = new BehaviorSubject<any[]>([
    { id: 1, name: 'ojolon', email: 'ojolon@ojolon.com'}
    
  ]);

  getUsers(): Observable<any[]> {
    return this.users.asObservable();
  }

  addUser(user: any) {
    const currentUsers = this.users.getValue();
    this.users.next([...currentUsers, user]);
  }
  updateUser(id: number, updatedUser: any) {
    const currentUsers = this.users.getValue();
    const userIndex = currentUsers.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      currentUsers[userIndex] = { ...currentUsers[userIndex], ...updatedUser };
      this.users.next([...currentUsers]);
    }
  }

  deleteUser(id: number) {
    const currentUsers = this.users.getValue();
    const updatedUsers = currentUsers.filter(user => user.id !== id);
    return of(true);
  }

  getUserById(id: number): any {
    const currentUsers = this.users.getValue();
    return currentUsers.find(user => user.id === id); 
  }
}
