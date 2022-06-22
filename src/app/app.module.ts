import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookholderComponent } from './components/bookholder/bookholder.component';
import { BookviewComponent } from './components/bookview/bookview.component';
import { BookcartComponent } from './components/bookcart/bookcart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SpecificbookComponent } from './components/specificbook/specificbook.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    BookholderComponent,
    BookviewComponent,
    BookcartComponent,
    NavbarComponent,
    HomepageComponent,
    SpecificbookComponent,
    FooterComponent,
    ContactusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
