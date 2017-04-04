import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

import { AnimalFriend } from '../model/animal-friend';

@Injectable()
export class AnimalFriendService {


    public constructor(private http: Http) {
    }

    public getAnimalFriends(): Observable<AnimalFriend[]> {

        return this.http.get(`${Constants.apiUrlBase}/pet`).map(response => AnimalFriend.fromResponseModelList(response.json()));
    }
}