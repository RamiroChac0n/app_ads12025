import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.scss'
})
export class HomeBodyComponent {

}
