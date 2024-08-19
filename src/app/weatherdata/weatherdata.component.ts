import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrl: './weatherdata.component.css'
})
export class WeatherdataComponent {

  @Input() weatherdata: any;
  

  

}
