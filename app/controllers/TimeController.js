import { setHTML } from "../utils/Writer.js";

function _drawTime() {
    const currentDate = new Date().toLocaleTimeString();
    // const currentTime = currentDate.getTime()
    setHTML('clock', currentDate)

}


export class TimeController {

    constructor() {
        _drawTime()
        setInterval(_drawTime, 1000)

    }



}

