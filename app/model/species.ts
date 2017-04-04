import { Breed } from './breed';

export class Species {

    private constructor(public name: string, public breeds: Breed[]) { }

    public static fromResponseModel(responseModel: any): Species {
        return new Species(responseModel.name, Breed.fromResponseModelList(responseModel.breeds));
    }

    public static fromResponseModelList(responseModelList: any[]): Species[] {

        let list: Species[] = [];
        for (let model of responseModelList) {
            list.push(Species.fromResponseModel(model));
        }

        return list;
    }
}