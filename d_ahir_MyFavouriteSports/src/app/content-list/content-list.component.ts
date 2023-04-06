import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
contentList : Content[] 
constructor(){0
  this.contentList=
 [ //1
  {
  id:1,
  title:"Basketball",
  description:"any",
  creator:"Dhaval",
  imgURL:"ghs",
},//2
{
  id:1,
  title:"Baseball",
  description:"any",
  creator:"DM",
  imgURL:"ghs"
},//3
{
  id:1,
  title:"Cricket",
  description:"any",
  creator:"DP",
  imgURL:"ghs"
},//4
{
  id:1,
  title:"Soccer",
  description:"any",
  creator:"Dw",
  imgURL:"ghs"
},//5
{
  id:1,
  title:"Hockey",
  description:"any",
  creator:"DF",
  imgURL:"ghs"
},//6
{
  id:1,
  title:"Football",
  description:"any",
  creator:"DG",
  imgURL:"ghs"
},
];
}
}
