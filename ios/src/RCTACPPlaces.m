/*
Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

#import "RCTACPPlaces.h"
#import "ACPPlaces.h"
#import "RCTACPPlacesDataBridge.h"
#import <CoreLocation/CoreLocation.h>

@implementation RCTACPPlaces

RCT_EXPORT_MODULE(ACPPlaces);

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(extensionVersion: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
  resolve([ACPPlaces extensionVersion]);
}

RCT_EXPORT_METHOD(getLastKnownLocation: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
[ACPPlaces getLastKnownLocation:^(CLLocation * _Nullable lastLocation) {
  resolve([RCTACPPlacesDataBridge dictionaryFromCLLocation:lastLocation]);
}];
}

RCT_EXPORT_METHOD(clear) {
[ACPPlaces clear];
}

RCT_EXPORT_METHOD(setAuthorizationStatus:(nonnull NSString*)authStatus) {
[ACPPlaces setAuthorizationStatus:[RCTACPPlacesDataBridge authStatusFromString:authStatus]];
}

RCT_EXPORT_METHOD(getNearbyPointsOfInterest:(nonnull NSDictionary *)locationDict limit:(int) limit resolver:(RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
[ACPPlaces getNearbyPointsOfInterest:[RCTACPPlacesDataBridge CLLocationFromDict:locationDict] limit:limit
  callback:^(NSArray<ACPPlacesPoi *> * _Nullable nearbyPoi) {
  NSMutableArray *poiArray = [NSMutableArray array];
for (ACPPlacesPoi* poi in nearbyPoi) {
[poiArray addObject:[RCTACPPlacesDataBridge dictionaryFromPoi:poi]];
}

resolve(poiArray);
} errorCallback:^(ACPPlacesRequestError result) {
  reject(nil, @"ACPPlacesRequestErrorNone", nil);
}];
}

RCT_EXPORT_METHOD(processGeofence:(nonnull NSDictionary *)geofenceDict transitionType:(int) transitionType) {
[ACPPlaces processRegionEvent:[RCTACPPlacesDataBridge clRegionFromDict:geofenceDict] forRegionEventType:[RCTACPPlacesDataBridge regionEventTypeFromInt:transitionType]];
}

RCT_EXPORT_METHOD(getCurrentPointsOfInterest:(RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
[ACPPlaces getCurrentPointsOfInterest:^(NSArray<ACPPlacesPoi *> * _Nullable userWithinPoi) {
  NSMutableArray *poiArray = [NSMutableArray array];
for (ACPPlacesPoi* poi in userWithinPoi) {
[poiArray addObject:[RCTACPPlacesDataBridge dictionaryFromPoi:poi]];
}

resolve(poiArray);
}];
}

@end
