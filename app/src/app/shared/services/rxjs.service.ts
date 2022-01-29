import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { AnticipationMock } from '../mocks/anticipation.mocks';
import { DigitalAccountMock } from '../mocks/digital_account.mocks';
import { LoansMock } from '../mocks/loans.mocks';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  private loansMock = LoansMock;
  private digitalAccountMock = DigitalAccountMock;
  private antecipationMock = AnticipationMock;
  cardsSubject = new BehaviorSubject<any>(this.loansMock.infoCards.cards);


  constructor() { }

  getCurrentCards() {
    this.cardsSubject.getValue();
  }

  getLoansData = () => {
    return of(this.loansMock);
  }

  getDigitalAccountData = () => {
    return of(this.digitalAccountMock);
  }

  getAntecipationData = () => {
    return of(this.antecipationMock);
  }

}
