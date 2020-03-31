
import { cacheService } from './cache.service';

class FeatureToggleService {
  public async isEnabled(featureName: string): Promise<boolean> {
    return await cacheService.getFeature(featureName);
  }

  public async isDisabled(featureName: string) {
    return !!await cacheService.getFeature(featureName);
  }
}

export const featureToggle = new FeatureToggleService();
