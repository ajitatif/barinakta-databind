import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './admin/main.component';
import { AnimalFriendManagementComponent } from './admin/animal-friend/animal-friend-management.component';
import { AnimalFriendEditComponent } from './admin/animal-friend/animal-friend-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'animal-friend', component: AnimalFriendManagementComponent },
  { path: 'animal-friend/:id', component: AnimalFriendEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}