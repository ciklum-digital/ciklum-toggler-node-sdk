
import { FeatureToggleConfig } from './models/feature-toggle-config';
import { httpService } from './http.service';
import { config } from '../../shared/configs/config';

class CacheService {
  private featureToggleDataConfig:FeatureToggleConfig;
  public getFeature(featureName: string): Promise<boolean> {
    if (this.featureToggleDataConfig) {
      return Promise.resolve(this.featureToggleDataConfig[featureName] as boolean);
    }

    return this.initCache().then((featureToggleDataConfig) => {
      return featureToggleDataConfig.data[featureName] as boolean;
    });
  }
  private cacheUpdate() {
    config.getConfig('cachePeriod')
        .then((period: number) => {
          if (period) {
            setTimeout(() => {
              this.initCache().then();
            },         period);
          }
        });
  }
  private initCache(): Promise<any> {
    return httpService.getConfig().then(
            (config: any) => {
              this.featureToggleDataConfig = config.data;

              return this.featureToggleDataConfig;
            },
        );
  }
}

export const cacheService = new CacheService();
