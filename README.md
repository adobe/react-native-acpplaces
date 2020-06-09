
# React Native AEP Places Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces) ![npm](https://img.shields.io/npm/dm/@adobe/react-native-acpplaces) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpplaces/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpplaces) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpplaces.svg)


`@adobe/react-native-acpplaces` is a wrapper around the iOS and Android [AEP Places SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-places) to allow for integration with React Native applications. Functionality to enable Adobe Places is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Places extension it is recommended to begin by installing the [Core extension](https://github.com/adobe/react-native-acpcore).

> Note: If you are new to React Native we suggest you follow the [React Native Getting Started](<https://facebook.github.io/react-native/docs/getting-started.html>) page before continuing.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpplaces` package:

```bash
cd MyReactApp
npm install @adobe/react-native-acpplaces
```

#### 2.1 Link
- **React Native 0.60+**


[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.


- **React Native <= 0.59**


```bash
react-native link @adobe/react-native-acpplaces
```

*Note* For `iOS` using `cocoapods`, run:

```bash
cd ios/ && pod install
```

## Tests
This project contains jest unit tests which are contained in the `__tests__` directory, to run the tests locally:
```
make run-tests-locally
```

## Usage

### [Places](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-places)

##### Importing the extension:
```javascript
import {ACPPlaces} from '@adobe/react-native-acpplaces';
```

##### Getting the extension version:

```javascript
ACPPlaces.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPPlaces version: " + version));
```

##### Registering the extension with ACPCore:

> Note: It is recommended to initialize the SDK via native code inside your AppDelegate and MainApplication in iOS and Android respectively. For more information see how to initialize [Core](https://github.com/adobe/react-native-acpcore#initializing-the-sdk).

##### **iOS**
```objective-c
#import <RCTACPPlaces/ACPPlaces.h>

[ACPPlaces registerExtension];
```

##### **Android:**
```java
import com.adobe.marketing.mobile.Places;

Places.registerExtension();
```

##### Get the nearby points of interest:

```javascript
let location = new ACPPlacesLocation(<latitude>, <longitude>, <optional altitude>, <optional speed>, <optional accuracy>);
ACPPlaces.getNearbyPointsOfInterest(location, <limit>).then(pois => console.log("AdobeExperienceSDK: ACPPlaces pois: " + pois)).catch(error => console.log("AdobeExperienceSDK: ACPPlaces error: " + error));
```
##### Process geofence:

```javascript
// create a geofence
let geofence = new ACPPlacesGeofence("geofence Identifier", <latitude>, <longitude>, <radius>, <optional expiration-duration>);
ACPPlaces.processGeofence(geofence, ACPPlacesGeofenceTransitionType.ENTER);
ACPPlaces.processGeofence(geofence, ACPPlacesGeofenceTransitionType.EXIT);
```

##### Get the current point of interests:

```javascript
ACPPlaces.getCurrentPointsOfInterest().then(pois => console.log("AdobeExperienceSDK: ACPPlaces pois: " + pois));
```

##### Get the last known location

```javascript
ACPPlaces.getLastKnownLocation().then(location => console.log("AdobeExperienceSDK: ACPPlaces location: " + location));
```

##### Clear

```javascript
ACPPlaces.clear();
```

##### Set Authorization status:

```javascript
ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.ALWAYS);
ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.DENIED);
ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.RESTRICTED);
ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.WHEN_IN_USE);
ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.UNKNOWN);
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
