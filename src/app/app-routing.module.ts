import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcartComponent } from './components/bookcart/bookcart.component';
import { BookholderComponent } from './components/bookholder/bookholder.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'store', component: BookholderComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'cart', component: BookcartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
