
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
  addContent(Content:any){
    this._sports.push(Content);
  }
  //A method that returns the length of the Content array
  listLength():number{
   return this._sports.length;
  }
}