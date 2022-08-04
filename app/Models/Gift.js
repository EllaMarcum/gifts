
export class Gift {
  constructor(data) {
    this.opened = data.opened
    this.tag = data.tag
    this.url = data.url
    this.id = data.id
  }


  get GiftTemplate() {
    return ` <div class="col-6">
    <img src"${this.url}"></div>
    </section>
  </div>`
  }
}