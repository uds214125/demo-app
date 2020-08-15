import { Component, OnInit } from '@angular/core';
import { SessionService, LoginService } from '../services';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService, 
    private sessionService:SessionService,
    private authService: AuthService,
    private route: Router ) { }

  ngOnInit(): void {
  }

  onLogout():void{
    console.log(this.authService.isAuthenticated());// TODO: 

    // this.loginService.logout().subscribe((res:any)=>{
    //   this.sessionService.logout();
    //   this.route.navigate(['/']);
    // });    
  }

}
