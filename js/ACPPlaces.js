/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/

'use strict';
const ACPPlaces = require('react-native').NativeModules.ACPPlaces;

import type {ACPPlacesLocation} from './models/ACPPlacesLocation';
import type {ACPPlacesPOI} from './models/ACPPlacesPOI';
import type {ACPPlacesGeofence} from './models/ACPPlacesGeofence';

module.exports = {

  /**
   * Returns the version of the ACPPlaces extension
   * @param  {string} Promise a promise that resolves with the extension version
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(ACPPlaces.extensionVersion());
  },

  getNearbyPointsOfInterest(location: ACPPlacesLocation, limit: number): Promise<Array<ACPPlacesPOI>> {
    return ACPPlaces.getNearbyPointsOfInterest(location, limit);
  },

  processGeofence(geofence: ACPPlacesGeofence, transitionType: number) {
    ACPPlaces.processGeofence(geofence, transitionType);
  },

  getCurrentPointsOfInterest(): Promise<Array<ACPPlacesPOI>> {
    return ACPPlaces.getCurrentPointsOfInterest();
  },

  getLastKnownLocation() : Promise<?ACPPlacesLocation> {
    return ACPPlaces.getLastKnownLocation();
  },

  clear() {
    ACPPlaces.clear();
  },

  setAuthorizationStatus(authStatus : string) {
    ACPPlaces.setAuthorizationStatus(authStatus);
  }
};
