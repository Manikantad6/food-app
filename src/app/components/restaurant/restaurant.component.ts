import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { AppService } from '../../services/app/app.service'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  default_image = "https://b.zmtcdn.com/data/pictures/chains/0/18323620/2cdeb1c7f92ee3027ade78f34bd40092.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"

  restaurantDetails:any
  reviews:any
  dailyMenuItems:any 
  constructor(
    private _route: ActivatedRoute,
    private appService: AppService,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      console.log(res.id)
      this.loadData(res.id)
    });
  }

  async loadData(res_id:number){
    try{
      this.spinner.show()
      this.restaurantDetails = await this.appService.getRestaurantDetails(res_id)
      console.log(this.restaurantDetails)
      this.reviews = await this.appService.getReviews(res_id)
      console.log('reviews', this.reviews)
      // this.dailyMenuItems = await this.appService.getDailyMenu(res_id)
      // this.dailyMenuItems = this.dailyMenuItems.daily_menu
      console.log('daily menu', this.dailyMenuItems)


      this.spinner.hide()
    }catch(err){
      console.log(err)
      this.spinner.hide()
    }
    
  }

}
