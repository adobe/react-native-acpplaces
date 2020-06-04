/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@format
*/

import { NativeModules } from 'react-native';
import ACPPlaces from '../js/ACPPlaces';
import ACPPlacesAuthStatus from '../js/models/ACPPlacesAuthStatus';
import ACPPlacesLocation from '../js/models/ACPPlacesLocation';
import ACPPlacesGeofence from '../js/models/ACPPlacesGeofence';
import ACPPlacesPOI from '../js/models/ACPPlacesPOI';
import ACPPlacesGeofenceTransitionType from '../js/models/ACPPlacesGeofenceTransitionType';

describe('ACPPlaces', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'extensionVersion');
    await ACPPlaces.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('getNearbyPointsOfInterest is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'getNearbyPointsOfInterest');
    let placesLocation = new ACPPlacesLocation(37.33, -121.89, null, null, null);
    await ACPPlaces.getNearbyPointsOfInterest(placesLocation, 10);
    expect(spy).toHaveBeenCalled();
  });

  test('processGeofence is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'processGeofence');
    let geofence = new ACPPlacesGeofence("newId", 37.33, -121.89, 10, 10);
    await ACPPlaces.processGeofence(geofence, ACPPlacesGeofenceTransitionType.ENTER);
    expect(spy).toHaveBeenCalled();
  });

  test('getCurrentPointsOfInterest is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'getCurrentPointsOfInterest');
    await ACPPlaces.getCurrentPointsOfInterest();
    expect(spy).toHaveBeenCalled();
  });

  test('getLastKnownLocation is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'getLastKnownLocation');
    await ACPPlaces.getLastKnownLocation();
    expect(spy).toHaveBeenCalled();
  });

  test('clear is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'clear');
    await ACPPlaces.clear();
    expect(spy).toHaveBeenCalled();
  });

  test('setAuthorizationStatus is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPPlaces, 'setAuthorizationStatus');
    await ACPPlaces.setAuthorizationStatus();
    expect(spy).toHaveBeenCalled();
  });

});
