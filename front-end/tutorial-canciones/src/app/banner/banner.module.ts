import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { BannerComponent } from './banner.component'
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SwiperModule],
  bootstrap: [BannerComponent]
})
export class BannerModule { }
