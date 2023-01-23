import { Component, Input, OnInit } from '@angular/core';
import { genres } from 'src/app/data/genres';

@Component({
  selector: 'app-media-genres',
  templateUrl: './media-genres.component.html',
  styleUrls: ['./media-genres.component.scss']
})
export class MediaGenresComponent {

  @Input() genreIds: string[];

  get genres(): string[] {
    const g: string[] = [];
    this.genreIds.forEach(id => {
      const genre = genres[id];
      if (genre) g.push(genre);
    });
    return g;
  }

}
