/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CancionService } from './cancion.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('Service: Cancion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CancionService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });

  it('should ...', inject([CancionService], (service: CancionService) => {
    expect(service).toBeTruthy();
  }));
});
