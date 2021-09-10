import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, NgbModule],
  exports: [BannerComponent]
})
export class BannerModule { }
