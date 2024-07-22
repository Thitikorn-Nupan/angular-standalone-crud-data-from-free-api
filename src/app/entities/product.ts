class Product {
  private _id : number
  private _title : string
  private _price : number
  private _description : string
  private _category : string
  private _image : string

  constructor(id: number, title: string, price: number, description: string, category: string, image: string) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._description = description;
    this._category = category;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

}

export {
  Product
}
