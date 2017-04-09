import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';

import { AnimalFriendService } from '../../service/animal-friend.service';

import { AnimalFriend } from '../../model/animal-friend';
import { Breed } from '../../model/breed';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'animal-friend-edit',
    moduleId: module.id,
    templateUrl: './animal-friend-edit.component.html',
    providers: [ AnimalFriendService ]
})
export class AnimalFriendEditComponent {

    private animalFriend: AnimalFriend;

    private availableBreeds: Breed[] = [];

    @ViewChild('theForm')
    private theForm;

    constructor(private route: ActivatedRoute, private router: Router, private animalFriendService: AnimalFriendService) {
    }

    ngOnInit(): void {

        this.animalFriendService.getAvailableBreeds().subscribe(breeds => {
            this.availableBreeds = breeds;
            this.route.params.switchMap((params: Params) => this.animalFriendService.get(+params['id']))
                .subscribe(animalFriend => {
                    this.animalFriend = animalFriend;
                    this.animalFriend.breed = this.availableBreeds.filter(b => b.id === this.animalFriend.breed.id)[0];
            });
        });
    }

    private onSubmit() {
        this.animalFriendService.update(this.animalFriend).subscribe(() => {
            this.navigateBack();
        })
    }

    private navigateBack() {
        console.log(`Forma dokunuldu mu ? ${this.theForm.touched}`);
        this.router.navigate(['/animal-friend']);
    }
}