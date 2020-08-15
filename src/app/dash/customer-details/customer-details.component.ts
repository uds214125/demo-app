import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  // name = 'Angular 5';
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  // form:FormGroup;

  displayedColumns = ['custid', 'age', 'gender','occupation','martialstatus','income','expense'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(`${'IB1400'}${i}`,i)); }
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit() {
    // this.form = new FormGroup({
    //   sortBy: new FormControl('')
    // })
   }
  submit(){
    // console.log("=============sort by ", this.form.value);
  }


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


/** Builds and returns a new User. */
function createNewUser(custId: string,age:number): UserData {
  // const name =
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    const occupation =
    OCCUPATION[Math.round(Math.random() * (OCCUPATION.length - 1))] + ' '
    // OCCUPATION[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    // id: id.toString(),
    // name: name,
    // progress: Math.round(Math.random() * 100).toString(),
    // color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    custid:custId.toString(),
    age: (Math.round(Math.random() * (100 - 22) + 5)),
    gender:GENDER[Math.floor(Math.random()*STATUS.length)],
    occupation:occupation,
    martialstatus: STATUS[Math.floor(Math.random()*STATUS.length)],
    income: (Math.round(Math.random() * (25000 - 15000) + 10000)).toFixed(2),
    expense:(Math.round(Math.random() * (15000 - 15000) + 10000)).toFixed(2)
  };
}

/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  const GENDER = ['Male', 'Female'];
  const OCCUPATION = ['Bank Man','Dentist','Police','Teacher','Software engineer'];
  const STATUS = ['Married','Unmarried'];
  
export interface UserData {
  // id: string;
  // name: string;
  // progress: string;
  // color: string;
  custid:string;
  age:number;
  gender:string;
  occupation:string;
  martialstatus:string;
  income:string;
  expense:string;
}
// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: Element[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];
