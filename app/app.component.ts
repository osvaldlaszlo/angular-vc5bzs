import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular 5';
  displayedColumns = ['Name', 'Age']
  dataSource = [{name:'Sara',age:17}, {name: 'John', age: 20}]
  dataSourceEmpty = []
}

