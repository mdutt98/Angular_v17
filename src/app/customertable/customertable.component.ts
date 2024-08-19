import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrl: './customertable.component.css'
})
export class CustomertableComponent {

  // @Output() customerSelected = new EventEmitter<Customer>();

  customers = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', age: 30, address: '123 Main St', contactNumber: '123-456-7890' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', age: 25, address: '456 Elm St', contactNumber: '987-654-3210' },
    { firstName: 'Jim', lastName: 'Beam', email: 'jim@example.com', age: 35, address: '789 Oak St', contactNumber: '555-555-5555' },
    { firstName: 'Jack', lastName: 'Daniels', email: 'jack@example.com', age: 40, address: '101 Pine St', contactNumber: '444-444-4444' },
    { firstName: 'Johnny', lastName: 'Walker', email: 'johnny@example.com', age: 45, address: '202 Maple St', contactNumber: '333-333-3333' }
  ];

  customerSelected: any;

  onViewDetails(customer: any) {
    this.customerSelected =customer;
  }

  // customer?: Customer;

}
