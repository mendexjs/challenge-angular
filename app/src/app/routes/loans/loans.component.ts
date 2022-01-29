import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/shared/services/rxjs.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit, OnDestroy {
  loans:any = {};

  constructor(
    private rxjsSv: RxjsService
  ) { }
 
  
  ngOnInit(): void {
    this.loadData();
    this.loans.infoCards.cards = [];
    this.rxjsSv.cardsSubject.subscribe(
      (cards) => {
        console.log('sub', cards);
        this.loans.infoCards.cards.push(...cards);
      }
      );
    }
    
  ngOnDestroy(): void {
    this.rxjsSv.cardsSubject.unsubscribe();
  }

  loadData() {
    this.rxjsSv.getLoansData()
      .subscribe((value) => {
        this.loans = value;
    })
  }

}
