import { Component, OnInit } from '@angular/core';
import {AnticipationMock} from "../../shared/mocks/anticipation.mocks";

@Component({
  selector: 'app-anticipation',
  templateUrl: './anticipation.component.html',
  styleUrls: ['./anticipation.component.scss']
})
export class AnticipationComponent implements OnInit {
  anticipation = AnticipationMock;

  constructor() { }

  ngOnInit(): void {
  }

}
