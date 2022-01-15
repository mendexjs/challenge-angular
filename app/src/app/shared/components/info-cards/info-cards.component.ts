import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {
  @Input() content!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
