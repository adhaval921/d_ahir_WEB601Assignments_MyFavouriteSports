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
         imgURL: "",
         type:"INDOOR",
        },
      ];
  }
}
