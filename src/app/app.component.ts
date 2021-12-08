import { Component } from '@angular/core';
import {Paciente} from "./paciente"




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedPaciente: Paciente=new Paciente();

  pacienteArray: Paciente[ ] = [ 

  ];

  add(){

    if(this.selectedPaciente.id!==0){
      this.pacienteArray.push(this.selectedPaciente);
    }
    
     this.selectedPaciente=new Paciente();
  }
  Edit(){
    if(this.selectedPaciente.id==0){
      this.pacienteArray.push(this.selectedPaciente);
    }
    
     this.selectedPaciente=new Paciente();
  }

  openEdit(Paciente : Paciente){
    this.selectedPaciente=Paciente;

  }

  delete(){
    if(confirm('Estas seguro de eliminarlo?')){
      this.pacienteArray=this.pacienteArray.filter(x => x != this.selectedPaciente);
      this.selectedPaciente = new Paciente();
    }
  }
   
}
