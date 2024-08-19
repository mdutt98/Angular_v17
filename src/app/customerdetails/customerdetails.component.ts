import { Component, Input } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent {

  @Input() customer: any;

}
