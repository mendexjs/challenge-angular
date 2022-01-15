import {Component, OnInit} from '@angular/core';
import {FooterMock} from "../../mocks/footer.mocks";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  content = FooterMock;
  constructor() { }

  ngOnInit(): void {
  }

}
