import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";


class GiftsService {
  async getGifs() {
    const res = await sandboxApi.get('/gifts')
    console.log(res.data);
    ProxyState.Gifs = res.data.map(p => new this.getGifs(p))
  }
}

export const giftsService = new GiftsService()  