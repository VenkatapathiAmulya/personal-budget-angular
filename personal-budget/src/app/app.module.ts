import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';
import { PieComponent } from './pie/pie.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    AboutComponent,
    LoginComponent,
    P404Component,
    BreadcrumbsComponent,
    ContactComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
