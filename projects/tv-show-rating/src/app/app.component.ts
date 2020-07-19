import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title$: Observable<string>;

  // title = 'tv-show-rating';
  title = null;

  constructor(private titleSvc: TitleService) {}

  ngOnInit() {
    setTimeout(() => {
      this.title$ = this.titleSvc.title$;
    });
  }
}
