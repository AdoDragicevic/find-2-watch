import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/app/models/shared/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-movie-info-list',
  templateUrl: './show-movie-info-list.component.html'
})
export class ShowMovieInfoListComponent {

  @Input() movie: MovieDetails;

  get title(): string  {
    return this.movie.title || this.movie.name;
  }

  get genres(): string  {
    return this.movie.genres.map(genre => genre.name).join(', ');
  }

  get imdbUrl(): string  {
    return `https://www.imdb.com/title/${this.movie.imdb_id}`;
  }

  get youtubeUrl(): string {
    const media = this.title.split(' ').join('+');
    return `https://www.youtube.com/results?search_query=${media}+trailer`;
  }

  get posterUrl(): string {
    return `${environment.imgBaseUrl}/${this.movie.poster_path}`;
  }

}
