import { Component,OnInit,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from '../content-list/content-list.component';
import { style } from '@angular/animations';
import { TypeModifier } from '@angular/compiler';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit{
  title = 'd_ahir_MyFavouriteSports';
  @Input() contentList?:Content;
  defaultImage : string = "https://th.bing.com/th/id/OIP.X2E1HouOQJlYCI-IjbVExgHaE7?w=298&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  font = '3px underline';
  constructor(){
}
ngOnInit(){
    
}
display_card(){
  console.log("Id: "+this.contentList?.id+"Name Of Game: "+this.contentList?.title);
}

// <<<<<<< Updated upstream
//   sports: ContentList;
//   constructor() {
//     let contentitem: Content;
//     this.sports = new ContentList();

//     contentitem = {
//       id: 0,
//       title: 'basketball',
//       creator: "michael jordan",
//       description: "game of 5 players",
//       imgURL: "",
//       type: "ball game",
//       tags: ["lebron james", "stephan curry", "kobe bryant"]
//     };
//     this.sports.addContent(contentitem);
//     contentitem = {
//       id: 1,
//       title: 'baseball',
//       creator: "18th century england",
//       description: "game of 9 players",
//       imgURL: "",
//       type: "ball game",
//       tags: ["juan soto", "mike trout", "babe ruth"]
//     };
//     this.sports.addContent(contentitem);
//     contentitem = {
//       id: 2,
//       title: 'football',
//       creator: "1869 new brunswick",
//       description: "game of 11 players",
//       imgURL: "",
//       type: "ball game",
//       tags: ["ronaldo", "neymar", ]
//     };
//     this.sports.addContent(contentitem);
//     contentitem = {
//       id: 3,
//       title: 'volleyball',
//       creator: "1895 holyoke",
//       description: "game of 6 players",
//       imgURL: "",
//       type: "ball game",
//       tags: ["giba", "karch kiraly", "bartosz kurek"]
//     };
//     this.sports.addContent(contentitem);

}
