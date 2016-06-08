import {Injectable} from '@angular/core'
import {Router} from '@angular/router';

@Injectable()
export class SFContext {
  public token: string;
  public instanceUrl: string;

  static login() {
    const client = '3MVG98_Psg5cppybfSP2avsRT8.GSNDO06WoCgrRDVccBokCZ_RPFgU.ld9wkYxq9xlpuE1HOsowG8a0ntR7r';

    const redirect = `${location.protocol}//${location.host}/`;

    const url = `https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${client}&redirect_uri=${redirect}`;

    location.href = url;
  }

  constructor(router: Router) {
    const href = location.href;

    const token = /access_token=([^&]*)/.exec(href);

    const instanceUrl = /instance_url=([^&]*)/.exec(href);

    if (token && instanceUrl) {
      this.token = decodeURIComponent(token[1]);
      this.instanceUrl = decodeURIComponent(instanceUrl[1]);

      router.navigateByUrl('/');
    }
  }
}
