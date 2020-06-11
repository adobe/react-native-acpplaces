/*
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. (See LICENSE-MIT for details)
*/

package com.acpplacessample;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.adobe.marketing.mobile.reactnative.places.RCTACPPlacesPackage;
import com.adobe.marketing.mobile.reactnative.RCTACPCorePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.adobe.marketing.mobile.MobileCore; // import MobileCore
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.Places;
import com.adobe.marketing.mobile.WrapperType;
import com.adobe.marketing.mobile.LoggingMode;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RCTACPPlacesPackage(),
            new RCTACPCorePackage()
          );
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    MobileCore.setApplication(this); // add this line
    MobileCore.setLogLevel(LoggingMode.VERBOSE);
    MobileCore.configureWithAppID("yourAppId");
    MobileCore.setWrapperType(WrapperType.REACT_NATIVE);

    try {
      Identity.registerExtension();
      Lifecycle.registerExtension();
      Signal.registerExtension();
      Places.registerExtension();
    } catch (Exception e) {
      // handle exception
    }

    MobileCore.start(null);
  }
}
