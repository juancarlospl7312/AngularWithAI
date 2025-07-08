import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserRemoveDialogComponent } from '../user-remove-dialog/user-remove-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'city',
    'gender',
    'actions'
  ];
  dataSource = new MatTableDataSource<User>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // TODO: Implement actual user loading logic
    this.loadUsers();
    this.dataSource.sort = this.sort;
  }

  loadUsers(): void {
    // Simulated user data - replace with actual API call
    const users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phoneNumber: '+1234567890',
        city: 'New York',
        zipCode: '10001',
        gender: 'Male'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        phoneNumber: '+0987654321',
        city: 'Los Angeles',
        zipCode: '90001',
        gender: 'Female'
      }
    ];
    this.dataSource.data = users;
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '500px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the user in the data source
        const index = this.dataSource.data.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(UserRemoveDialogComponent, {
      width: '500px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Remove the user from the data source
        const index = this.dataSource.data.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
}
