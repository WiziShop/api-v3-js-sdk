import { catchError, map, share } from 'rxjs/operators';
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { JwtService } from './jwt.service';
import { EMPTY, Observable, throwError } from 'rxjs';
import { RefreshTokenDto } from '..';

export class WiziApiService {

  private static observableRequests = new Map();

  private static token: string;

  static apiBaseUrl = 'https://api.wizishop.com/v3';

  static handleError(err: any) {
    return throwError(err);
  }

  static setToken(token: string) {
    this.token = token;
  }

  static getToken() {
    return this.token;
  }

  static refreshTokenIfExpiresSoon(offsetDays = 5): Observable<RefreshTokenDto> {
    if (this.token && JwtService.isTokenExpired(this.token, offsetDays * 86400)) {
      return this.get<RefreshTokenDto>('/auth/refresh_token')
        .pipe(map(dto => {
          this.setToken(dto.token);
          return dto;
        }));
    }

    return EMPTY;
  }

  static getPayloadFromToken(token: string) {
    if (token) {
      try {
        return JwtService.decodeToken(token);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  static getPayload() {
    if (this.token) {
      return this.getPayloadFromToken(this.token);
    }
    return null;
  }

  private static getObservableKey(method: string, url: string, body?: any, headers?: any) {

    const data = {
      url: url,
      body: body,
      headers: headers,
      method: method,
    };

    return JSON.stringify(data);
  }


  static request<T>(url: string, request: AjaxRequest = {}): Observable<T> {


    request.url = this.apiBaseUrl + url;

    if (!request.headers) {
      request.headers = {};
    }

    request.headers['Content-type'] = 'application/json';

    request.responseType = 'json';

    if (this.token) {
      request.headers['Authorization'] = 'Bearer ' + this.token;
    }

    const observableKey = this.getObservableKey(url, request.method, request.body, request.headers);

    let obs = this.observableRequests.get(observableKey);

    if (!obs) {
      obs = ajax(request)
        .pipe(
          map((result: AjaxResponse) => {

            return result.response as T;
          }),
          catchError(this.handleError),
          share()
        );

      this.observableRequests.set(observableKey, obs);
    }

    return obs;
  }


  static get<T>(url: string, params?: any): Observable<T> {

    if (params) {
      const searchParams = new URLSearchParams('');

      for (const key in params) {
        if (params[key]) {
          searchParams.set(key, params[key]);
        }
      }


      url += '?' + decodeURIComponent(searchParams.toString());
    }

    return this.request<T>(url, {
      method: 'GET'
    });
  }

  static post<T>(url: string, body: Object): Observable<T> {
    return this.request<T>(url, {
      body: JSON.stringify(body),
      method: 'POST'
    });
  }

  static put<T>(url: string, body: Object): Observable<T> {
    return this.request<T>(url, {
      body: JSON.stringify(body),
      method: 'PUT'
    });
  }

  static delete<T>(url: string): Observable<T> {
    return this.request<T>(url, {
      method: 'DELETE'
    });
  }
}
