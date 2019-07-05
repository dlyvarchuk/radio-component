import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllRadiosComponent} from './components/all-radios/all-radios.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'radios', component: AllRadiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
