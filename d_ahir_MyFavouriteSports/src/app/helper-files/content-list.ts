
import { Content } from "./content-interface";
export class ContentList {
  //A private array of type Content, whos name starts with an underscore character
  private _sports:Content[];
  constructor() {
    this._sports=[]; //A constructor that initially sets the Content array to be empty
  }
  //A getter method that returns your Content array
  get items():Content[]{
    return this._sports;
  }
  //addContent method
  addContent(oneItem: Content): void{
    this._sports.push(oneItem);
  }
  //A method that returns the length of the Content array
  listLength():number{
   return this._sports.length;
  }
  printProperties(index:number): any{
   if(this._sports.length <= index || index < 0){
    return `<h2>Error!</h2>`
   }
   return `<div class="content-wrapper">
            <h1>Title:${this._sports[index].title}</h1><br />
            <p>Description:${this._sports[index].description}</p><br />
            <h6>creator:${this._sports[index].creator}</h6><br />
            <img src="${this._sports[index].imgURL}" height="100px"><br />
           <h6>Type: ${this._sports[index].type}</h6><br />
           <h6>Tags: ${this._sports[index].tags}</h6><br />
           </div>`
  }
}