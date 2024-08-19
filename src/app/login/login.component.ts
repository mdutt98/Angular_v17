import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {

    "id": "",
    "password": ""
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post("http://localhost:8080/api/user/login", this.loginObj).subscribe((res: any) => {
      if (res.token) {
        alert("Login Success");
        localStorage.setItem("loginToken", res.token);
        this.router.navigateByUrl("/home");
      } else {
        alert("Login Failed");
      }
    }, error => {
      alert("An error occurred: " + error.message);
    });
  }
}
