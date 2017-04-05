import { Species } from './species';
export class Breed {

    private constructor(public name: string, public species: Species) { }

    public static fromResponseModel(responseModel: any): Breed {
        if (!!responseModel) {
            return new Breed(responseModel.name, Species.fromResponseModel(responseModel.species));
        }

        return null;
    }

    public static fromResponseModelList(responseModelList: any[]): Breed[] {
        let list: Breed[] = [];
        for (let model of responseModelList) {
            list.push(Breed.fromResponseModel(model));
        }

        return list;
    }
}