import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: 'Max Mustermann', country: 'Germany'},
    {id: 2, name: 'Ryan', country: 'Spain'},
    {id: 3, name: 'Joe', country: 'USA'},
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }
  

}
