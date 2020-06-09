import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from '../Models/interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;

  @Input() set retourConnexion(val:string){
     if(val=='KO'){
      this.presentToast()
     }
  }

  @Output() getConnexionEmmeter=new EventEmitter();
  
  constructor(private formBuilder:FormBuilder,public toastController: ToastController) { }

  ngOnInit() {
    this.initForm();
  }

  initForm():void{
    this.loginForm=this.formBuilder.group({
      login:['',[Validators.required]],
      pwd:['',[Validators.required]]
    });
  }

  onConnexion(){
   let login:string=this.loginForm.get('login').value;
   let pwd:string=this.loginForm.get('pwd').value;
   
   let credential:Credentials={
     login:login,
     pwd:pwd

   }
   this.getConnexionEmmeter.emit(credential);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Veuillez vérifier les valeurs saisies. Login ou mot de passe incorrect.',
      header: 'Erreur connexion',
      position: 'top',
      animated:true,
      color:'danger',
      duration: 3000
    });
    toast.present();
  }

}
