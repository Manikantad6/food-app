import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app/app.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  default_image = "https://b.zmtcdn.com/data/pictures/chains/0/18323620/2cdeb1c7f92ee3027ade78f34bd40092.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
  city:string = "bangalore"
  cityInfo:any
  locationDetails: any
  best_rated_restaurant:any

  constructor(
    private appService: AppService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.findCity()
    this.appService.activeCity.subscribe(value=> {
      this.city = value;
      console.log(this.city)
      this.findCity()

    })

  }
  async findCity(){
   try{
      this.spinner.show();
      let res:any = await this.appService.getCity(this.city)
      console.log(res)
      if(res.location_suggestions?.length){
        this.cityInfo = res.location_suggestions[0]
        this.locationDetails = await this.appService.getLocationDetails(this.cityInfo.entity_id, this.cityInfo.entity_type)
        this.best_rated_restaurant = this.locationDetails.best_rated_restaurant
        console.log('ccc', this.cityInfo)
        this.spinner.hide();

      }else{
        alert('sorry! service not available at your location')
      }
   }catch(err){
     console.log(err)
     this.spinner.hide();
   }
  }

  

}
