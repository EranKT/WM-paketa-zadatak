import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  dataUrl = 'http://www.mocky.io/v2/5e8465c23000008400cf4395';

  getConfig() {

    return this.http.get(this.dataUrl, { responseType: 'json' });

  }
}
