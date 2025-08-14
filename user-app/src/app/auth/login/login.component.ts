import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ){
    this.form = this.fb.group({
      username:['',Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    if(this.auth.login(this.form.value.username,this.form.value.password)){
      this.router.navigate(['/']);
    } else {
        alert('Usuario o contraseña invalida');
    }
  }
}
