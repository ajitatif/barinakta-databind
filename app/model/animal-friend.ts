import { Shelter } from './shelter';
import { Breed } from './breed';

export class AnimalFriend {

    private constructor(
        public name: string,
        public shelter: Shelter,
        public breed: Breed,
        public age: number,
        public photo: any[],
        public bio: string,
        public status: string) { }


    public static fromResponseModel(responseModel: any): AnimalFriend {

        if (!!responseModel) {
            return new AnimalFriend(responseModel.name, Shelter.fromResponseModel(responseModel.shelter),
                                    Breed.fromResponseModel(responseModel.breed), responseModel.age,
                                    responseModel.photo, responseModel.bio, responseModel.status);
        }
        return null;
    }

    public static fromResponseModelList(responseModelList: any[]): AnimalFriend[] {

        let list: AnimalFriend[] = [];
        for (let model of responseModelList) {
            list.push(AnimalFriend.fromResponseModel(model));
        }

        return list;
    }
}