import { Component, OnInit } from '@angular/core';
import { HomeHeaderComponent } from "../../components/home-header/home-header.component";
import { HomeBodyComponent } from "../../components/home-body/home-body.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit{
  constructor() {
    console.log('Esto es el contructor del home');
   }

  ngOnInit(): void {
    console.warn('Esto es el ngOnInit del home');
  }
}
