import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-tv-rating-form',
  templateUrl: './tv-rating-form.component.html',
  styleUrls: ['./tv-rating-form.component.scss'],
})
export class TvRatingFormComponent implements OnInit {
  @Input() title: string | null;

  tvShows = [
    { title: 'Better call Saul!' },
    { title: 'Breaking Bad' },
    { title: 'Lost' },
    { title: 'Mad men' },
  ];

  form = new FormGroup({
    tvShow: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  constructor(private titleSvc: TitleService) {}

  ngOnInit(): void {
    this.titleSvc.update('new title!');
  }

  submit() {
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }
}
