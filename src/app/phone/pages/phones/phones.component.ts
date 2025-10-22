import { AfterViewInit, Component, OnInit, inject, ViewChild, signal } from '@angular/core';
import { Object } from '../../interfaces/object';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PhoneService } from '../../services/phone.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatSort,
    MatPaginatorModule, 
    MatButton,
    MatButtonModule  
  ],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.scss'
})
export default class PhonesComponent implements OnInit, AfterViewInit {

  private readonly phoneService = inject(PhoneService);
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name'];

  //ViewChild
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //signals
  public divStyle = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.phoneService.get().subscribe({
      next: (res) => {
        this.dataSource.data = [...res];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeClass(){
    this.divStyle.set(!this.divStyle());
  }
}