import { fromEvent, merge, Observable, Subject, throwError } from 'rxjs';
import { OauthAppTokenDto } from '../../dtos/oauth/app/oauth-app-token.dto';
import { first, switchMap } from 'rxjs/operators';
import { OauthAppTokenCreateForm } from './app/oauth-app-token-create.form';

export class OauthSignInWithPopupForm {
  static oauthBaseUrl = 'https://admin.wizishop.com/v3/oauth-app/authorize';

  static submit(appId: number): Observable<OauthAppTokenDto> {
    const options = {
      width: 450,
      height: 540,
      left: 0,
      top: 0,
      toolbar: 0,
      scrollbars: 1,
      status: 1,
      resizable: 1,
      location: 1,
      menuBar: 0
    };

    const popupUrl = `${this.oauthBaseUrl}?app_id=${appId}&redirect_uri=${document.location.origin}`;

    options.left = Math.floor(window.screenX + (window.outerWidth - options.width) / 2);
    options.top = 0;

    const optionsArray = [];
    Object.keys(options).forEach(key => optionsArray.push(`${key}=${options[key]}`));
    const optionsString = optionsArray.join(',');

    const opener = window.open(popupUrl, 'oauthLogin', optionsString);

    const openerClosedSubject = new Subject();

    const closedInterval = setInterval(() => {
      if (opener.closed) {
        openerClosedSubject.next({ closed: true });
        openerClosedSubject.complete();
        clearInterval(closedInterval);
      }
    }, 1000);

    const events = [openerClosedSubject, fromEvent(window, window.addEventListener ? 'message' : 'onmessage')];

    return merge(...events).pipe(
      first(),
      switchMap((event: MessageEvent | { closed: boolean }) => {
        clearInterval(closedInterval);

        if (event instanceof MessageEvent) {
          if (event.data.error) {
            return throwError({
              code: event.data.error
            });
          }
          if (event.data.code) {
            return OauthAppTokenCreateForm.submit(appId, document.location.origin, event.data.code);
          }
        } else if (event.closed) {
          return throwError({
            code: 'auth/popup-closed-by-user'
          });
        }

        if (opener.closed === false) {
          opener.close();
        }
        return throwError({
          code: 'auth/unknown'
        });
      })
    );
  }
}
