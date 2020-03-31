
import { FeatureToggleConfig } from './models/feature-toggle-config';
import { httpService } from './http.service';
import { config } from '../../shared/configs/config';

class CacheService {
  private featureToggleDataConfig:FeatureToggleConfig;

  public async getFeature(featureName: string): Promise<boolean> {
    if (this.featureToggleDataConfig) {
      return Promise.resolve(this.featureToggleDataConfig[featureName] as boolean);
    }
    await this.initCache();

    return this.featureToggleDataConfig[featureName] as boolean;
  }
  private async initCache() {
    // tslint:disable-next-line:no-this-assignment
    const self = this;
    const period = await config.getConfig('cachePeriod');
    if (period) {
      setTimeout(async function repeat() {
        await self.fillCache();
        setTimeout(repeat, period);
      },         period);
    }

    await this.fillCache();
  }
  private async fillCache(): Promise<any> {
    const config = await httpService.getConfig();
    this.featureToggleDataConfig = config.data;

    return this.featureToggleDataConfig;
  }
}

export const cacheService = new CacheService();
