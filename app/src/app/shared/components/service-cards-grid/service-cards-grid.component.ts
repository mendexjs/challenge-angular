import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-cards-grid',
  templateUrl: './service-cards-grid.component.html',
  styleUrls: ['./service-cards-grid.component.scss']
})
export class ServiceCardsGridComponent implements OnInit {
  @Input() services!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async navTo(redirectPath: any) {
    await this.router.navigateByUrl(redirectPath);
  }
}
