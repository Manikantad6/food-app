import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component'
import {RestaurantComponent} from '../app/components/restaurant/restaurant.component'
import {FoodResultsComponent} from '../app/components/food-results/food-results.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurant/:id', component: RestaurantComponent},
  {path: 'search/:query', component: FoodResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
