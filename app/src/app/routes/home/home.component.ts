import { Component, OnInit } from '@angular/core';
import {HomeMock} from "../../shared/mocks/home.mocks";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeMock = HomeMock;
  constructor() { }

  ngOnInit(): void {
  }

}
