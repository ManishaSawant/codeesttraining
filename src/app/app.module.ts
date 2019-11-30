import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { CoursesModule } from './courses/courses.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Employeeservice } from './auth/employeeservice';

@NgModule({
  declarations: [
    AppComponent,
     BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule
  ],
  providers: [Employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
