import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";

class ImageService {

    async getPicture() {
        const res = await api.get('api/images')
        AppState.imgUrl = new Image(res.data)


    }


}

export const imageService = new ImageService()