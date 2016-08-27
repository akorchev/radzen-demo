import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SampleAuthorizationService {
  token: string;

  static login() {
    const redirectUrl = `${location.protocol}//${location.host}/`;

    const url = `https://radzen.auth0.com/authorize?client_id=YxejI6yr9SVg8tuQ54ZcDNUdmQYJPijQ&response_type=token&redirect_uri=${redirectUrl}`;

    location.href = url
  }

  constructor(router: Router) {
    const href = location.href;

    let token = null;

    if (/access_token=([^&]*)/.test(href)) {
      token = RegExp.$1;
    }

    if (/id_token=([^&]*)/.test(href)) {
      token = RegExp.$1;
    }

    if (token) {
      this.token = decodeURIComponent(token);

      router.navigateByUrl('/');
    }
  }
}
