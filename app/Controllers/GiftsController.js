import { Pop } from "../Utils/Pop.js"
import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";


function _drawGifts() {
  let template = ''
  ProxyState.Gifts.forEach(g => template += g.GiftTemplate)
  document.getElementById('gifts').innerHTML = template
}



export class GiftsController {
  constructor() {
    _drawGifts()
    this.getGifts
    ProxyState.on('gifts', _drawGifts)
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error('[getGift]', error)
      console.error(error)
    }
  }


}