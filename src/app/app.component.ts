import {  Component } from '@angular/core';
import * as cities from './jsonData/citiesList'
import { AppService } from '../app/services/app/app.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-panda';
  citiesList:any
  searchString:string=''

  constructor(
    private appService: AppService,
    private router:Router
  ){
    this.citiesList = cities
  }

  citySelected(cityName:string){
    this.appService.setActiveCity(cityName); 
  }
  
  search(){
    this.router.navigate([`/search/${this.searchString}`]);
  }
}
