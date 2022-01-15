import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss']
})
export class TitleContentComponent implements OnInit {
  @Input() content!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
