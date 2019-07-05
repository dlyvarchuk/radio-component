import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Radio} from '../models/Radio';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private host = 'https://teclead.de/recruiting/radios';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Radio[]> {
    return this.http.get<Radio[]>(`${this.host}`);
  }
}
