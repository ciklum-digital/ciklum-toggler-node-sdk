interface IConfig {
  toggleUrl: string;
  envKey: string;
  ssl?: boolean;
  cachePeriod?: number;
}

class Config {
  private toggleUrl: string;
  private envKey: string;
  private cachePeriod: number;
  private ssl: boolean;

  public getConfig(option?: string): any | IConfig {
    if (typeof option === 'string') {
      return this[option];
    }

    return {
      toggleUrl: this.toggleUrl,
      envKey: this.envKey,
      ssl: this.ssl,
      cachePeriod: this.cachePeriod,
    };

  }

  public init({ toggleUrl, envKey, cachePeriod = 0, ssl = false }: IConfig) {
    this.toggleUrl = toggleUrl;
    this.envKey = envKey;
    this.cachePeriod = cachePeriod;
    this.ssl = ssl;
  }
}

export const config = new Config();
