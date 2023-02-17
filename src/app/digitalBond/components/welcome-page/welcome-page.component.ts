import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  name: string | any;
  constructor(private route: ActivatedRoute) {}
  getParams() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.name = name;
  }
  ngOnInit(): void {
    this.getParams();
  }
}
