import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Life is what  you make it', 'Quote has 5 votes', 'Allan.M', 'A.M.M'),
    new Quote('Love is a Jouurney', 'Quote has 1 vote', 'Sheng Peng', 'B.K.M'),
    new Quote('You Only Live Once', 'Quote has 2 votes', 'Bad Thougts', 'S.K.L'),
    new Quote('What goes around...', 'Quote has 3 votes', 'Ash Tray', 'L.M.N'),
    new Quote('Karma is a B****.', 'Quote has 4 votes', 'Bad Thoughts', 'P.K.M')
    
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
