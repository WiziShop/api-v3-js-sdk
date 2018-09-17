// Avoid TS error "cannot find name escape"

declare let escape: any;


export class JwtService {

  static urlBase64Decode(str: string) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Illegal base64url string!');

    }

    return decodeURIComponent(escape(window.atob(output))); // polifyll https://github.com/davidchambers/Base64.js
  }

  static decodeToken(token: string) {

    if (!token) {
      throw new Error('JWT empty');
    }

    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }

  static getTokenExpirationDate(token: string) {
    let decoded: any;

    try {
      decoded = this.decodeToken(token);
    } catch (e) {
      return null;
    }

    if (typeof decoded.exp === 'undefined') {
      return null;
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  static isTokenExpired(token: string, offsetSeconds?: number) {
    const date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;
    if (date === null) {
      return true;
    }
    // Token expired?
    return !(date.getTime() > (new Date().getTime() + (offsetSeconds * 1000)));
  }
}
