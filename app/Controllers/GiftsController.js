import { Pop } from "../Utils/Pop"

export class GiftsController {
  constructor() {
    this.getGifts
  }

  async getGifts() {
    try {
      await GiftsService.getGifts()
    } catch (error) {
      Pop.error('[getGift]',)
    }
  }
}