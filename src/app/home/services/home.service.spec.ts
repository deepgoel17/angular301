import { async, TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClient } from '@angular//common/http';
import { TMDB_URLS, JSON_SERVER_URLS, BASE_URL } from '../../shared/config';
import { environment } from '../../../environments/environment';
import { LogLevel, LogService } from '../.../../../shared/service/log.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
const nowPlayingMoviesUrl = BASE_URL.TMDB_API + TMDB_URLS.NOW_PLAYING_MOVIES + environment.API_KEY + '&page=';
const upcomingMoviesUrl = BASE_URL.TMDB_API + TMDB_URLS.UPCOMING_MOVIES + environment.API_KEY + '&page=';
const genresUrl = BASE_URL.TMDB_API + TMDB_URLS.GENRES + environment.API_KEY + '&language=en-US';
const sortPreferenceUrl = environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS;
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [HomeService, LogService],
    imports: [HttpClientTestingModule]
  });
});
describe('HomeService', () => {
  let service;
  function setup() {
    const sharedService = TestBed.get(HomeService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { sharedService, httpTestingController };
  }
  const http: any = {
    // mock properties here
  };

  const store: any = {
    // mock properties here
  };
  const logger: any = {
    // mock properties here
  };

  beforeEach(() => {
    service = new HomeService(http, logger, store);
  });

  it('should run #getNowshowing()', async () => {
    const page = 1;
    const { sharedService, httpTestingController } = setup();
    sharedService.getNowshowing(page);
    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(nowPlayingMoviesUrl + page);

    expect(req.request.method).toBe('GET');
    const movies = {
      results: [
        {
          title: 'string',
          id: 1,
          popularity: 'string',
          poster_path: 'string',
          release_date: 'string',
          original_language: 'hindi',
          overview: 'overview',
          genre_ids: 'any',
          vote_average: 2,
          vote_count: 2
        }
      ]
    };
    req.flush(movies);
    const getCreditsUrl = BASE_URL.TMDB_API + TMDB_URLS.GET_CREDITS + 1 + '/credits?' + environment.API_KEY;
    const req2 = httpTestingController.expectOne(getCreditsUrl);

    expect(req2.request.method).toBe('GET');
    const credits = { cast: ['case1', 'case1', 'case1', 'case1'], crew: ['case1', 'case1', 'case1', 'case1'] };
    req2.flush(credits);
  });

  it('should run #getUpcomingMovies()', async () => {
    const page = 1;
    const { sharedService, httpTestingController } = setup();
    sharedService.getUpcomingMovies(page);
    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(upcomingMoviesUrl + page);

    expect(req.request.method).toBe('GET');
    const movies = {
      results: [
        {
          title: 'string',
          id: 1,
          popularity: 'string',
          poster_path: 'string',
          release_date: 'string',
          original_language: 'hindi',
          overview: 'overview',
          genre_ids: 'any',
          vote_average: 2,
          vote_count: 2
        }
      ]
    };
    req.flush(movies);
    const getCreditsUrl = BASE_URL.TMDB_API + TMDB_URLS.GET_CREDITS + 1 + '/credits?' + environment.API_KEY;
    const req2 = httpTestingController.expectOne(getCreditsUrl);

    expect(req2.request.method).toBe('GET');
    const credits = { cast: ['case1', 'case1', 'case1', 'case1'], crew: ['case1', 'case1', 'case1', 'case1'] };
    req2.flush(credits);
  });

  it('should run #getGenres()', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.getGenres();
  });

  it('should run #fetchGenres()', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.fetchGenres();
    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(genresUrl);

    expect(req.request.method).toBe('GET');
    const movies = { genres: 'genres' };
    req.flush(movies);
  });

  it('should run #getCastAndCrew()', async () => {
    const movies = [
      {
        title: 'string',
        id: 1,
        popularity: 'string',
        poster_path: 'string',
        release_date: 'string',
        original_language: 'hindi',
        overview: 'overview',
        genre_ids: 'any',
        vote_average: 2,
        vote_count: 2
      }
    ];
    const { sharedService, httpTestingController } = setup();
    sharedService.getCastAndCrew(movies);
    const getCreditsUrl = BASE_URL.TMDB_API + TMDB_URLS.GET_CREDITS + 1 + '/credits?' + environment.API_KEY;
    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(getCreditsUrl);

    expect(req.request.method).toBe('GET');
    const credits = { cast: ['case1', 'case1', 'case1', 'case1'], crew: ['case1', 'case1', 'case1', 'case1'] };
    req.flush(credits);
  });

  it('should run #getTheaterList()', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.getTheaterList();

    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(environment.JSONSERVER + JSON_SERVER_URLS.THEATER_URL);

    expect(req.request.method).toBe('GET');
    const credits = { cast: ['case1', 'case1', 'case1', 'case1'], crew: ['case1', 'case1', 'case1', 'case1'] };
    req.flush(credits);
    // const result = getTheaterList();
  });

  it('should run #getUserPreference()', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.getUserPreference().subscribe(data => {
      // tslint:disable-next-line: no-use-before-declare
      expect(data).toEqual(credits);
    });
    // spyOn(sharedService.http, 'get');
    const req = httpTestingController.expectOne(sortPreferenceUrl);

    expect(req.request.method).toBe('GET');
    const credits = { cast: ['case1', 'case1', 'case1', 'case1'], crew: ['case1', 'case1', 'case1', 'case1'] };
    req.flush(credits);
  });

  // it('should run #setPreference()', async () => {
  //   const { sharedService, httpTestingController } = setup();
  //   const newPreference = '';
  //   const currentUserId = 'id';
  //   sharedService.setPreference(newPreference, currentUserId);

  //   const req = httpTestingController.expectOne(environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS);

  //   expect(req.request.method).toBe('GET');
  //   const result = {
  //     users: [{ uid: 'id' }]
  //   };
  //   req.flush(result);
  //   const reqPut = httpTestingController.expectOne(environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS);

  //   expect(reqPut.request.method).toBe('PUT');
  //   const result2 = {
  //     users: [{ uid: 'id' }]
  //   };
  //   reqPut.flush(result);
  // });
});
