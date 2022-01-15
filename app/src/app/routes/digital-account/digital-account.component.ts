import { Component, OnInit } from '@angular/core';
import {DigitalAccountMock} from "../../shared/mocks/digital_account.mocks";

@Component({
  selector: 'app-digital-account',
  templateUrl: './digital-account.component.html',
  styleUrls: ['./digital-account.component.scss']
})
export class DigitalAccountComponent implements OnInit {
  digitalAccount = DigitalAccountMock;
  constructor() { }

  ngOnInit(): void {
  }

}
