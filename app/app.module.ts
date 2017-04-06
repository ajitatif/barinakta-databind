import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './admin/main.component';
import { AdminNavigationComponent } from './admin/navigation.component';
import { LandingComponent } from './landing.component';

import { AnimalFriendManagementComponent } from './admin/animal-friend/animal-friend-management.component';
import { AnimalFriendEditComponent } from './admin/animal-friend/animal-friend-edit.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, MainComponent, AdminNavigationComponent, LandingComponent, AnimalFriendManagementComponent,
                    AnimalFriendEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
