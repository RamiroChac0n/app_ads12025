import { Component, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent implements OnInit{
  // Propiedades del componente
  @Input() inputDato!:String;
  @Input() miNumero!:number;
  public dato:String = 'Hola mundo';
  public contador:number = 0;

  constructor() {
    
  }
  ngOnInit(): void {
    this.dato = this.inputDato;
  }
}
