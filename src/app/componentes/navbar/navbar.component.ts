import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean;
  nombreUser: string;
  email: string;
  fotoUsuario: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth){
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.email = auth.email;
        this.fotoUsuario = auth.photoURL;
      }
      else{
        this.isLogin = false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
  }
}
