import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Biography, Cast, Credits, Crew } from 'src/app/models/credits/credits';
import { IndexResponse, Media, MediaType, Mixed } from 'src/app/models/index/results';
import { BiographyRequestConfig, CreditsRequestConfig, RecommendationsRequestConfig, RequestConfig, SimilarRequestConfig } from 'src/app/models/shared/http-request';
import { ShowRelatedResults } from 'src/app/models/show/results';
import { ShowRelatedType } from 'src/app/models/show/show';
import { HttpSubscriberService } from 'src/app/services/results/http-response/http-subscriber/http-subscriber.service';

@Injectable()
export class ShowRelatedResultsService {

  constructor(
    private readonly httpSubscriberSvc: HttpSubscriberService
  ) { }

  getResults$(relatedType: ShowRelatedType, mediaType: MediaType, id: string): Observable<ShowRelatedResults> {
    return of( this.getRequestConfig(relatedType, mediaType, id) )
      .pipe(
        switchMap( config => this.httpSubscriberSvc.getRequest$(config) as
          Observable<IndexResponse<Mixed> | Credits | Biography>
        ),
        map( res => this.extractData(relatedType, res) ),
        map( data => data.slice(0,8) ),
        map( data => {
          const listType = relatedType === 'cast' ? 'person' : 'media';
          return { listType, data };
        }),
        catchError( () => throwError( () => 'Unable to find results!' ) )
      )
  }

  getLink(relatedType: ShowRelatedType, mediaType: MediaType, id: string): string {
    switch (relatedType) {
      case 'biography-movie-cast':
        case 'biography-movie-crew':
        return `/biography/movie/${id}`;
      case 'biography-tv-cast':
        case 'biography-tv-crew':
        return `/biography/tv/${id}`;
      case 'cast':
        return `/credits/${mediaType}/${id}`;
      case 'recommendations':
        return `/index/recommendations/${mediaType}/${id}`;
      case 'similar':
        return `/index/similar/${mediaType}/${id}`;
      default:
        return '/';
    }
  }

  private getRequestConfig(relatedType: ShowRelatedType, mediaType: MediaType, id: string): RequestConfig {
    switch (relatedType) {
      case 'recommendations':
        return new RecommendationsRequestConfig(mediaType, id);
      case 'similar':
        return new SimilarRequestConfig(mediaType, id);
      case 'cast':
        return new CreditsRequestConfig(mediaType, id);
      case 'biography-movie-cast':
        case 'biography-movie-crew':
        return new BiographyRequestConfig('movie', id);
      case 'biography-tv-cast':
        case 'biography-tv-crew':
        return new BiographyRequestConfig('tv', id);
    }
  }

  private extractData(relatedType: ShowRelatedType, results: IndexResponse<Mixed> | Credits | Biography): Cast[] | Crew[] | Mixed[] {
    switch (relatedType) {
      case 'recommendations':
      case 'similar':
        return (results as IndexResponse<Mixed>).results;
      case 'cast':
      case 'biography-movie-cast':
      case 'biography-tv-cast':
        return (results as Credits | Biography).cast;
      case 'biography-movie-crew':
      case 'biography-tv-crew':
        return (results as Credits | Biography).crew;
    }
  }

}
