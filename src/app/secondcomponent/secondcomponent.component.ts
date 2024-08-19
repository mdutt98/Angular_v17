import { Component } from '@angular/core';
import { ArrayElement } from '../ArrayElements';
import { MajorOppsService } from '../major-opps.service';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrl: './secondcomponent.component.css'
})
export class SecondcomponentComponent {


  
  products: ArrayElement[] = [];
  
  newProduct: ArrayElement = {
    index: 0,
    name: '',
    description: '',
    imageUrl: ''
  };

  constructor(private productService: MajorOppsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getArrayElements().subscribe((products) => {
      this.products = products;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe((product) => {
      this.products.push(product);

      this.newProduct = {
        index: 0,
        name: '',
        description: '',
        imageUrl: ''
      };
    });
  }
}
