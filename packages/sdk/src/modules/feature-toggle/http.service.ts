import * as http from 'http';
import * as https from 'https';
import { promisify } from 'util';

import { config } from '../../shared/configs/config';

class HttpService {

  public async getConfig(): Promise<any> {
    const { toggleUrl, envKey: token } = config.getConfig();
    const url = `${toggleUrl}/?token=${token}`;
    let payload;
    try {
      const response = await this.get(url);
      payload = JSON.parse(response);
    } catch (e) {
      payload = e;
    }

    return payload;
  }

  private get(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      http.get(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body = body + chunk;
        });
        res.on('end', () => {
          resolve(body);
        });
      });
    });
  }
}

export const httpService = new HttpService();
