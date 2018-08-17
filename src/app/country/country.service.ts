import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/other';
import { PtkResponse } from '../models/ptk-response';
import { BASE_HREF } from '../consts';

const URL_GET_ALL_COUNTRIES = BASE_HREF + '/ptk/country'

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(URL_GET_ALL_COUNTRIES);
  }

}
