import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activite, ActiviteUser } from 'src/app/Models/interface';

@Component({
  selector: 'app-modal-creer-activite',
  templateUrl: './modal-creer-activite.component.html',
  styleUrls: ['./modal-creer-activite.component.scss'],
})
export class ModalCreerActiviteComponent implements OnInit {
  activiteForm:FormGroup;
  newActiviteForm:boolean=true;
  newActiviteEncours:boolean=false;
  listeActiviteRecu:Activite[]=[];

  @Output() creerActiviteEmmeter=new EventEmitter();
  @Output() TerminerActiviteEmmeter=new EventEmitter();

  @Input() set listeActivite(val:Activite[]){
    if(val!=null)
    this.listeActiviteRecu=val;
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }


  initForm():void{
    this.activiteForm=this.formBuilder.group({
      idActivite:['',[Validators.required]]
    });
  }

  newActiviteCreated(){
    this.newActiviteForm=false;
    this.newActiviteEncours=true;
    let idActiviteSelected=this.activiteForm.get('idActivite').value;
    let myActivity:ActiviteUser={
      dateActivite:new Date(),
      heureDebut:new Date(),
      heureFin:null,
      idActivite:idActiviteSelected,
      idUser:localStorage.getItem("appTrackingUserId"),
      valide:"O",
      idActiviteUser:null
    }
    this.creerActiviteEmmeter.emit(myActivity);
  }

  terminerActivite(){
    this.TerminerActiviteEmmeter.emit("terminer");
    this.newActiviteForm=true;
    this.newActiviteEncours=false;
  }

}
