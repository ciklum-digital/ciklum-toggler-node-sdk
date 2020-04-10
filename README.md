# @ciklum-toggler/node-sdk

@ciklum-toggler/node-sdk is easy way to integrate your nodejs application with ciklum toggler feature flags provider 

## Getting started

* Run `npm i -S @ciklum-toggler/node-sdk` or `yarn add @ciklum-toggler/node-sdk` to install module as dependency
* Import config from module to your index.js (root) 
```
import {
     config
   } from '@ciklum-toggler/node-sdk';
```
* Configure module settings
    * add config initialisation in you root file
    * add value for `toggleUrl` -  path to your instance of **Ciklum Toggler** and api endpoint mostly it's `/api/external-systems-access`
    * add value for `envKey` - sdk token for your environment
```
config.init({
        toggleUrl: '${path-to-your-instance}/api/external-systems-access',
        envKey: 'unique-env-sdk-key',
      });
```

## Usage
### Config options
*Example*

```
config.init({
        toggleUrl: '${path-to-your-instance}/api/external-systems-access',
        envKey: 'unique-env-sdk-key',
        cachePeriod: 1000, // - 1000ms 
        ssl: true
      });
```
* Parameter `cachePeriod` by default is disabled, if you add value in milliseconds it is automatically requested changes from **Ciklum Toggler**
* Parameter `ssl` by default false, it uses when  your **Ciklum toggler** instance configure under https transport 
### Service

*Example*

Import service where you are going to use it

```
import { featureToggle } from '@ciklum-toggler/node-sdk';

```

Usage service in your code

```
async function myMethod() {
    const isFeatureEnabled = await featureToggle.isEnabled('FEATURE_NAME'); //-return promise 
    const isFeatureDisabled = await featureToggle.isDisabled('FEATURE_NAME'); //-return promise 
}

```

## API

* Service
    * featureToggle.isEnabled - check if feature is enabled and return Promise<boolean>
    * featureToggle.isDisabled - check if feature is disabled and return Promise<boolean>
