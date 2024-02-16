export class Pizza {

  constructor(id?: number, nom?: string, taille?: number, isVege?: boolean,image?:string) {
    this.id = id;
    this.nom = nom;
    this.taille = taille;
    this.isVege = isVege;
    this.image = image;
  }

  id?:number;
  nom?:string;
  taille?:number;
  isVege?:boolean;
  image?:string


}
