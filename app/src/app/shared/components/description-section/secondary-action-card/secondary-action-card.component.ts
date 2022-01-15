import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-secondary-action-card',
  templateUrl: './secondary-action-card.component.html',
  styleUrls: ['./secondary-action-card.component.scss']
})
export class SecondaryActionCardComponent implements OnInit {
  @Input() content!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
