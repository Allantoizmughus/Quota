import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Life is what  you make it', 'Quote by Allan.M'),
    new Quote('Love is a Jouurney', 'Quote by sheng peng'),
    new Quote('You Only Live Once', 'Quote by Bad Thoughts'),
    new Quote('What goes around...', '  Quote by Ash Tray'),
    new Quote('Karma is a B****.', 'Quote by Bad Thoughts')
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
