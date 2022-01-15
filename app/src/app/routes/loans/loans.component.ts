import { Component, OnInit } from '@angular/core';
import {LoansMock} from "../../shared/mocks/loans.mocks";

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  loans = LoansMock;

  constructor() { }

  ngOnInit(): void {
  }

}
