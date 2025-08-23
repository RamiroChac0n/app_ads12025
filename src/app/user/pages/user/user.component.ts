import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent implements OnInit {

  private readonly activeRoute = inject(ActivatedRoute);
  private readonly userService = inject(UserService);

  constructor() {}

  ngOnInit(): void {
    /*
    console.log(this.activeRoute.snapshot.queryParamMap.get('id'));
    console.log(this.activeRoute.snapshot.queryParamMap.get('name'));
    console.log(this.activeRoute.snapshot.queryParamMap.get('type'));
    */
   this.getUsers();
  }
  getUsers(){
    this.userService.get().subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log('complete');
      }
    });
  }
}
