import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

import { AnimalFriend } from '../model/animal-friend';

@Injectable()
export class AnimalFriendService {


    public constructor(private http: Http) {
    }

    public getAnimalFriends(): Observable<AnimalFriend[]> {

        return this.http.get(`${Constants.apiUrlBase}/animalFriends`).map(
                response => this.mapAnimalFriend(response.json()._embedded.animalFriends));
    }

    private mapAnimalFriend(data: any): AnimalFriend[] {

        let animalFriends = AnimalFriend.fromResponseModelList(data);
//        if (!!animalFriend._links.breed) {
//            let breed = Breed.fromResponseModel()
//        }
        return animalFriends;
    }
}