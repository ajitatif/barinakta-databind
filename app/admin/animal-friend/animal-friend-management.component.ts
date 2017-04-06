import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AnimalFriendService } from '../../service/animal-friend.service';

import { AnimalFriend } from '../../model/animal-friend';

@Component({
    selector: 'animal-friend-management',
    moduleId: module.id,
    templateUrl: 'animal-friend-management.component.html',
    providers: [ AnimalFriendService ]
})
export class AnimalFriendManagementComponent implements AfterViewInit {

    private animalFriends: AnimalFriend[] = [];

    public constructor(private animalFriendService: AnimalFriendService) { }

    public ngAfterViewInit() {
        this.populate();
    }

    private populate() {

        this.animalFriendService.getAnimalFriends().subscribe(animalFriends => { this.animalFriends = animalFriends; });
    }
}
