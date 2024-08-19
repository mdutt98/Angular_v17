import { Component } from '@angular/core';
import { MajorOppsService } from '../major-opps.service';
import { ArrayElement } from '../ArrayElements';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {

  
  arrayElements: Array<ArrayElement> = [];

  constructor(private router: Router, private bckendsrvc: MajorOppsService){

    this.getArrayElements();

  }

    getArrayElements() {

      console.log("Inside service");

      this.bckendsrvc.getArrayElements()
        .subscribe(res => this.arrayElements = res);
        
      console.log(this.arrayElements);
    }

}
