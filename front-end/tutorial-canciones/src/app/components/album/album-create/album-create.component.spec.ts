/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumCreateComponent } from './album-create.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AlbumCreateComponent', () => {
  let component: AlbumCreateComponent;
  let fixture: ComponentFixture<AlbumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCreateComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
