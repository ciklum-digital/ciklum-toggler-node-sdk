
import { cacheService } from './cache.service';

class FeatureToggleService {
  public isEnabled(featureName: string): Promise<boolean> {
    return cacheService.getFeature(featureName);
  }

  public isDisabled(featureName: string) {
    return !!cacheService.getFeature(featureName);
  }
}

export const featureToggle = new FeatureToggleService();
