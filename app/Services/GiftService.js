import { ProxyState } from "../AppState";
import { sandboxApi } from "./AxiosService";


class GiftService {
  async getGifs() {
    const res = await sandboxApi.get(./gifts)
    console.log(res.data);
    ProxyState.Gifs = res.data.map(p => new this.getGifs(p))
  }
}