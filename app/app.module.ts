import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './admin/main.component';
import { AdminNavigationComponent } from './admin/navigation.component';
import { LandingComponent } from './landing.component';

import { AnimalFriendManagementComponent } from './admin/animal-friend/animal-friend-management.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, MainComponent, AdminNavigationComponent, LandingComponent, AnimalFriendManagementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
