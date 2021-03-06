import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authservice.registerUser(this.email, this.password)
    .then(res => {
      this.flashMessagesService.show('Usuario creado corectamente', 
                                    {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privada']);
    }).catch( err => {
      this.flashMessagesService.show(err.message, 
                                    {cssClass: 'alert-danger', timeout: 4000});
    });
  }
}
