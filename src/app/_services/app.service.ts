import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get('https://mock-stg.getpackage-dev.com/cities');
  }
 
}
