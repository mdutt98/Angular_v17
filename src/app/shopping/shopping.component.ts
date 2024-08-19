import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit{

  cart: any  ;
  
  constructor(private shpngsrvc: ShoppingService) {}

  ngOnInit(): void {
    this.shpngsrvc.getdata().subscribe(
      (res) => { 
        this.cart =res;
        console.log("Service data", this.cart); 
      },
      (error) => { console.error("Error fetching data", error); }
    );
  }
  
}
