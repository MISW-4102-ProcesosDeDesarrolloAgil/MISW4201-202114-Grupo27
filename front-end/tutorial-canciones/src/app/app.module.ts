
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../app/components/components.module';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ColDatePipe } from "./pipes/colDate.pipe";


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ColDatePipe,
    AboutComponent,
    SidebarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgbModule
  ],
  exports : [
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ColDatePipe,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
