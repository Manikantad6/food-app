import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app/app.service'
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';   
@Component({
  selector: 'app-food-results',
  templateUrl: './food-results.component.html',
  styleUrls: ['./food-results.component.scss']
})
export class FoodResultsComponent implements OnInit {

  searchResult:any
  default_image = "https://b.zmtcdn.com/data/pictures/chains/0/18323620/2cdeb1c7f92ee3027ade78f34bd40092.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"

  constructor(
    private _route: ActivatedRoute,
    private appService: AppService,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      console.log(res.query)
      this.loadData(res.query)
    });
  }
  async loadData(query:string){
    try{
      this.spinner.show()
      this.searchResult = await this.appService.search(query)
      console.log(this.searchResult)
      this.spinner.hide()
    }catch(err){
      this.spinner.hide()
      console.log(err)
    }
   
  }

}
