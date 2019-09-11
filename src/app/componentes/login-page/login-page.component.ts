import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private router: Router,
    private authservice: AuthService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authservice.loginEmail(this.email, this.password)
    .then(res => {
      this.flashMessagesService.show('Usuario logado corectamente', 
                                    {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privada']);
    }).catch( err => {
      this.flashMessagesService.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
    });
  }

  onClickGooglelogin(){
    this.authservice.loginGoogle()
    .then(res => {
      this.flashMessagesService.show('Usuario logado corectamente', 
                                    {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privada']);
    }).catch( err => {
      this.flashMessagesService.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
    });
  }

  onClickfacebooklogin(){
    this.authservice.loginFacebook()
    .then(res => {
      this.flashMessagesService.show('Usuario logado corectamente', 
                                    {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privada']);
    }).catch( err => {
      this.flashMessagesService.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
    });
  }

  onClickTwitterlogin(){
    this.authservice.loginTwitter()
    .then(res => {
      this.flashMessagesService.show('Usuario logado corectamente', 
                                    {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privada']);
    }).catch( err => {
      this.flashMessagesService.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
    });
  }

}
