export class Shelter {

    private constructor(
        public name: string,
        public address: string,
        public phone: string,
        public gisCoordinates: string,
        public photo: any[]) { }


    public static fromResponseModel(responseModel: any): Shelter {

        if (!!responseModel) {
            return new Shelter(responseModel.name, responseModel.address, responseModel.phone,
                            responseModel.gisCoordinates, responseModel.phone);
        }
        return null;
    }
}