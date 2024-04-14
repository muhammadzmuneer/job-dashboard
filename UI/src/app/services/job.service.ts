import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getDashboardData() : Observable<any> {
    return this._http.get(`${environment.apiBaseUrl}/dashboard`);
  }
}
