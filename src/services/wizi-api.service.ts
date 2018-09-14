import { catchError, map, share } from 'rxjs/operators';
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';

export class WiziApiService {

  private static observableRequests = new Map();

  private static token: string;

  static apiBaseUrl = 'https://api.wizishop.com/v3';

  static handleError(err: any) {
    return err;
  }

  static setToken(token: string) {
    WiziApiService.token = token;
  }

  static getToken() {
    return WiziApiService.token;
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


  static request<T>(url: string, request: AjaxRequest = {}) {


    request.url = this.apiBaseUrl + url;

    if (!request.headers) {
      request.headers = {};
    }

    request.headers['Content-type'] = 'application/json';

    request.responseType = 'json';

    if (this.token) {
      request.headers['Authorization'] = 'Bearer ' + WiziApiService.token;
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


  static get<T>(url: string, params?: any) {

    if (params) {
      const searchParams = new URLSearchParams('');

      params.forEach((param, key) => {
        searchParams.set(key, param);
      });

      url += '?' + decodeURIComponent(searchParams.toString());
    }

    return this.request<T>(url, {
      method: 'GET'
    });
  }

  static post<T>(url: string, body: Object) {
    return this.request<T>(url, {
      body: JSON.stringify(body),
      method: 'POST'
    });
  }

  static put<T>(url: string, body: Object) {
    return this.request<T>(url, {
      body: JSON.stringify(body),
      method: 'PUT'
    });
  }

  static delete<T>(url: string) {
    return this.request<T>(url, {
      method: 'DELETE'
    });
  }
}
