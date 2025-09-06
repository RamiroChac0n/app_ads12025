import { Component, OnInit, inject } from '@angular/core';
import { Object } from '../../interfaces/object';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PhoneService } from '../../services/phone.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatTableModule, MatCardModule],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.scss'
})
export default class PhonesComponent implements OnInit {

  private readonly phoneService = inject(PhoneService);
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name'];

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}