import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

import { AnimalFriend } from '../model/animal-friend';
import { Breed } from '../model/breed';

@Injectable()
export class AnimalFriendService {


    public constructor(private http: Http) {
    }

    public getAnimalFriends(): Observable<AnimalFriend[]> {

        return this.http.get(`${Constants.apiUrlBase}/animalFriends?projection=animal_friend`).map(
               response => this.mapAnimalFriendList(response.json()._embedded.animalFriends));
    }

    public get(id: number): Observable<AnimalFriend> {

        return this.http.get(`${Constants.apiUrlBase}/animalFriends/${id}?projection=animal_friend`).map(
                response => this.mapAnimalFriend(response.json()));
    }

    public update(friend: AnimalFriend): Observable<void> {
        let body = {
            id: friend.id,
            name: friend.name,
            shelter: `${Constants.apiUrlBase}/shelters/${friend.shelter.id}`,
            breed: `${Constants.apiUrlBase}/breeds/${friend.breed.id}`,
            age: friend.age,
            bio: friend.bio,
            status: friend.status
        };

        let headers = new Headers();
        headers.append('content-type', 'application/json;encoding=utf8');
        return this.http.put(`${Constants.apiUrlBase}/animalFriends/${friend.id}`, JSON.stringify(body), { headers: headers}).map(response => null);
    }

    public getAvailableBreeds(): Observable<Breed[]> {
        let url = `${Constants.apiUrlBase}/breeds`;
        return this.http.get(url).map(response => this.mapBreedList(response.json()._embedded.breeds));
    }

    private mapAnimalFriendList(data: any): AnimalFriend[] {
        return AnimalFriend.fromResponseModelList(data);
    }

    private mapAnimalFriend(data: any): AnimalFriend {
        let animalFriends = AnimalFriend.fromResponseModel(data);
        return animalFriends;
    }

    private mapBreedList(data: any): Breed[] {
        return Breed.fromResponseModelList(data);
    }
}