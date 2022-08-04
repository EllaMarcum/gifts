
export class Gift {
  constructor(data) {
    this.opened = data.opened
    this.tag = data.tag
    this.url = data.url
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt

    this.id = data.id
  }

}