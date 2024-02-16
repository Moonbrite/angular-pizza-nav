export class Burger {
  constructor(id?: number, name?: string, nbrSteak?: number, image?: string) {
    this.id = id;
    this.name = name;
    this.nbrSteak = nbrSteak;
    this.image = image;
  }

  id?:number;
  name?:string;
  nbrSteak?:number;
  image?:string;

}
