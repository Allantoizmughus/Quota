import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Life is what  you make it', 'Quote has 0 votes', 'Allan.M', 'A.M.M',  0, 0, new Date(2019,7,12)),
    new Quote('Love is a Journey', 'Quote has 0 vote', 'Sheng Peng', 'B.K.M', 0, 0, new Date(2020,12,3)),
    new Quote('You Only Live Once', 'Quote has 0 votes', 'Bad Thougts', 'S.K.L', 0, 0, new Date(2021,1,23)),
    new Quote('What goes around...', 'Quote has 0 votes', 'Ash Tray', 'L.M.N', 0, 0, new Date(2020,11,23)),
    new Quote('Karma is a B****.', 'Quote has 0 votes', 'Bad Thoughts', 'P.K.M', 0, 0, new Date(21,2,18))
    
  ];

  addNewQuote(quote){
    this.quotes.push(quote)
  }

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
