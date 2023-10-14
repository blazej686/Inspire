import { AppState } from "../AppState.js";
import { imageService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPicture() {
    const picture = AppState.imgUrl
    if (picture == null) {
        return
    }
    document.body.style.backgroundImage = `url(${picture?.largeImgUrl})`

    // setHTML not needed yet
}

export class ImageController {
    constructor() {
        this.getPicture()

        AppState.on('imgUrl', _drawPicture)

    }

    async getPicture() {

        try {
            await imageService.getPicture()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}