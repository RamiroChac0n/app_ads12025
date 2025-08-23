import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.scss'
})
export class HomeBodyComponent implements OnInit{

  //Outputs
  @Output() outputData = new EventEmitter<string>();
  @Output() outputNumber = new EventEmitter<number>();

  //Propiedades
  public numero:number = 0;
  private miNumero:number = 0;

  //Inject
  private readonly route = inject(Router);

  constructor(){

  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.outputData.emit("Mensaje desde el componente hijo");
  }

  changeNumber(type:boolean){
    type
    ? this.outputNumber.emit(this.miNumero--)
    : this.outputNumber.emit(this.miNumero++);
  }

  goUsers(){
    this.route.navigate(['/users']);
  }

}
