import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngForm:any;
  form: any | undefined;
  submitted: boolean=true;
  isLoginFailed: boolean|undefined;
  isLoggedIn: boolean|undefined;
  roles: any;
  errorMessage: any;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private tokenStorage: TokenService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.form = this.formBuilder.group(
      {
        username: [
          '', [ Validators.required, ]
        ],
        password: [
          '', [Validators.required,]
        ],
      }

    );
  }


  onSubmit() {
    console.log(this.form);
    this.authService.login(this.form.value.username, this.form.value.password).subscribe(
      data => {
        if(data.code==401){
          this.errorMessage = data.error;

        }else{
        this.tokenStorage.saveToken(data.api_token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/dashboard']);
        }
      },
      err => {
       // this.errorMessage = err.error;
        this.isLoginFailed = true;
      }
    );
   }
  reloadPage() {
    throw new Error('Method not implemented.');
  }


}
