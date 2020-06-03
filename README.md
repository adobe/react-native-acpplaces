
# adobe-mobile-marketing-places

## Getting started

`$ npm install adobe-mobile-marketing-places --save`

### Mostly automatic installation

`$ react-native link adobe-mobile-marketing-places`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `adobe-mobile-marketing-places` and add `RCTACPPlaces.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRCTACPPlaces.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.adobe.marketing.mobile.reactnative.places.RCTACPPlacesPackage;` to the imports at the top of the file
  - Add `new RCTACPPlacesPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':adobe-mobile-marketing-places'
  	project(':adobe-mobile-marketing-places').projectDir = new File(rootProject.projectDir, 	'../node_modules/adobe-mobile-marketing-places/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':adobe-mobile-marketing-places')
  	```


## Usage
```javascript
import RCTACPPlaces from 'adobe-mobile-marketing-places';

// TODO: What to do with the module?
RCTACPPlaces;
```
  