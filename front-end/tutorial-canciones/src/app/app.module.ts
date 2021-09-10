
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { AlbumModule } from './album/album.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { CancionModule } from './cancion/cancion.module';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { MainComponent } from './ui/main/main.component';
import { UsuarioHeaderComponent } from './usuario/usuario-header/usuario-header.component';
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    UsuarioHeaderComponent,
    MenuComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsuarioModule,
    AlbumModule,
    CancionModule,
    AppHeaderModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
