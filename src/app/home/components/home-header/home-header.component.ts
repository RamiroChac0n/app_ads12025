import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  // Propiedades del componente
  public dato:String = 'Hola mundo';

  constructor() {
    
  }
}
