import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: Content[]
  message?:string
  constructor() {
    this.contentList =
      [ //1
        {
          id: 1,
          title: "Basketball",
          description: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court), while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three.",
          creator: "USA",
          imgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2F2023%2F03%2F18%2Fsport%2Folivia-pichardo-first-woman-division-i-baseball-spt-intl%2Findex.html&psig=AOvVaw2KhEnA04IBdbKQ1KoDhMYA&ust=1681446890368000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCHvPaDpv4CFQAAAAAdAAAAABAK",
          type:"TEAM",
        },//2
        {
          id: 2,
          title: "Baseball",
          description: "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher, throws a ball that a player on the batting team, called the batter, tries to hit with a bat.",
          creator: "USA",
          imgURL: "https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          type:"TEAM",
        },//3
        {
          id: 3,
          title: "Cricket",
          description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter . Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat, but before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket.",
          creator: "ENGLAND",
          imgURL: "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg",
          type:"",
        },//4
        {
          id: 4,
          title: "Soccer",
          description: "Association football, more commonly known as football or soccer,[a] is a team sport played between two teams of 11 players who primarily use their feet to propel a ball around a rectangular field called a pitch. The objective of the game is to score more goals than the opposing team by moving the ball beyond the goal line into a rectangular-framed goal defended by the opposing team. Traditionally, the game has been played over two 45-minute halves, for a total match time of 90 minutes. With an estimated 250 million players active in over 200 countries and territories, it is considered the world's most popular sport.",
          creator: "ENGLAND",
          imgURL: "https://en.wikipedia.org/wiki/Association_football#/media/File:Football_in_Bloomington,_Indiana,_1996.jpg",
          type: "OUTDOOR",
        },//5
        {
          id: 5,
          title: "Hockey",
          description: "Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice, or dry floor such as in a gymnasium. While these sports vary in specific rules, numbers of players, apparel and, notably, playing surface, they share broad characteristics of two opposing teams using a stick to propel a ball or disk into a goal.",
          creator: "INDIA",
          imgURL: "https://en.wikipedia.org/wiki/Hockey#/media/File:Field_hockey.jpg",
          type: "OUTDOOR",
        },//6
        {
          id: 6,
          title: "Football",
          description: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America, Ireland and Australia); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extents common origins and are known as football codes.",
          creator: "ANCIENT CHINA",
          imgURL: "",
          type: "OUTDOOR",
        },//7
        {
         id: 7,
         title: "8-ball pool",
         description: "anything",
         creator:"America",
         imgURL: "data:image/jpeg;base64,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",
         type:"INDOOR",
        },
      ];
  }

  findGameName(NameValue: string): any{
    let NameList = this.contentList.filter(gameName => gameName.title == NameValue );
    if(NameList.toLocaleString().length > 0){
      this.message = 'Game Name found!';
      console.log('Game is in the List!');
  }else{
    this.message='No Game found!';
    console.log('Game is not in the list');
  }
  }
}
