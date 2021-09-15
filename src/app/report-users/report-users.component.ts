import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';

export interface UserData {
  usuario: string;
  email: string;
  nombres: string;
  apellidos: string;
  estado: boolean;
}


const LAST_NAME: string[] = [
  'blueberry', 'lychee', 'kiwi', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const EMAIL: string[] = ['prueba@mail.com', 'mail@mail.com'];
@Component({
  selector: 'app-report-users',
  templateUrl: './report-users.component.html',
  styleUrls: ['./report-users.component.scss'],
  providers: [ModalComponent]
})
export class ReportUsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuario', 'email', 'nombres', 'apellidos', 'estado', 'opciones'];
  dataSource: MatTableDataSource<UserData>;
  @Output() Edit = new EventEmitter<any>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
  }

  createNewUser(id: number): UserData {
    const nombres = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    const apellidos = LAST_NAME[Math.round(Math.random() * (LAST_NAME.length - 1))] + ' ' +
      LAST_NAME[Math.round(Math.random() * (LAST_NAME.length - 1))].charAt(0) + '.';

    const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))] + ' ' +
      EMAIL[Math.round(Math.random() * (EMAIL.length - 1))].charAt(0) + '.';

    return {
      usuario: nombres,
      email: email,
      nombres: nombres,
      apellidos: apellidos,
      estado: true
    };
  }

  openModal(data: any = null) {
    if (data) {
      data.action = 'edit';
    }

    this.dialog.open(ModalComponent, {
      height: 'auto',
      width: '800px',
      data
    });
  }

  preview(data) {
    data.action = 'preview';
    this.dialog.open(ModalComponent, {
      height: 'auto',
      width: '800px',
      data
    });
  }

}
