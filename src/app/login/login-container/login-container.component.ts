import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/Models/interface';
import { LoginServService } from 'src/app/login-serv.service';
import { UserServeService } from 'src/app/user-serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {

  constructor(private logingServ:LoginServService,private userServ:UserServeService,private route:Router) { }

  retourConnexion:string;

  ngOnInit() {}

  onCredentialReceiveHandle(credential:Credentials){
    this.retourConnexion='';
    this.logingServ.getConnexionFromBack(credential).subscribe((response) => {
      if(response==null){
        this.retourConnexion='KO';
      }else{
        this.retourConnexion='OK';
        this.userServ.saveUserInfosLocalStorage(response);
        this.route.navigate(['home']);
      }
   });
  }

}
