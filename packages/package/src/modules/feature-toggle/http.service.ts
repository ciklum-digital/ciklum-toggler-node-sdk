import { config } from '../../shared/configs/config';
import { FeatureToggleModel } from './models/feature-toggle-model';

const httpClient = {
  get: (f): Promise<FeatureToggleModel> => {
    return Promise.resolve(({} as FeatureToggleModel));
  },
};
class HttpService {

  public getConfig(): Promise<FeatureToggleModel> {
    const { toggleUrl, envToken } = config.getConfig();
    const url = `${toggleUrl}?token=${envToken}`;

    return httpClient.get(url);
  }
}

export const httpService = new HttpService();
