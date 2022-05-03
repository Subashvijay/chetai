import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemListPageComponent } from './components/item-list-page/item-list-page.component';

const routes: Routes = [
  { path: 'items', component: ItemListPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
