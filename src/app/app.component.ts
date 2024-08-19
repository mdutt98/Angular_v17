import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularcodingpractice';

  selectedCustomer?: Customer;

  onCustomerSelected(customer: Customer) {
    this.selectedCustomer = customer;
  }

  constructor(private oauth: OAuthService){
    // this.configureSingleSignOn()
  }

  // configureSingleSignOn(){
  //   this.oauth.configure(authConfig);
  //   this.oauth.tokenValidationHandler = new JwksValidationHandler();
  //   this.oauth.loadDiscoveryDocumentAndTryLogin();
  // }

  // login(){
  //   this.oauth.initImplicitFlow();
  // }

  // logout(){
  //   this.oauth.logOut();
  // }
  
}
