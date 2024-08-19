import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';
import { CustomertableComponent } from './customertable/customertable.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { WeathersearchComponent } from './weathersearch/weathersearch.component';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LayoutComponent, children: [
    { path: 'home', component: HomeComponent}

  ]},
  { path: 'first', component: FirstcomponentComponent },
  { path: 'second', component: SecondcomponentComponent },
  { path: 'third', component: ThirdcomponentComponent },
  { path: 'custtable', component: CustomertableComponent },
  { path: 'custinfo', component: CustomerdetailsComponent },
  { path: 'weather', component: WeathersearchComponent },
  { path: 'weatherinfo', component: WeatherdataComponent },
  { path: 'shopping', component: ShoppingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
