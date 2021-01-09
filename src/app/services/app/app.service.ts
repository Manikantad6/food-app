import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public activeCity = new Subject<string>()
  constructor(
    private http: HttpClient
  ) { }

  setActiveCity(city: string){
    this.activeCity.next(city)
  }

  getCity(city){
    return this.http.get(`${environment.apiUrl}/locations?query=${city}`).toPromise()
  }

  getLocationDetails(entity_id:number, entity_type:string){
    return this.http.get(`${environment.apiUrl}/location_details?entity_id=${entity_id}&entity_type=${entity_type}`).toPromise()
  }

  getRestaurantDetails(res_id: number){
    return this.http.get(`${environment.apiUrl}/restaurant?res_id=${res_id}`).toPromise()
  }

  getDailyMenu(res_id: number){
    return this.http.get(`${environment.apiUrl}/dailymenu?res_id=${res_id}`).toPromise()
  }

  getReviews(res_id: number){
    return this.http.get(`${environment.apiUrl}/reviews?res_id=${res_id}`).toPromise()
  }

  search(queryString:string){
      return this.http.get(`${environment.apiUrl}/search?q=${queryString}`).toPromise()
  }

}
