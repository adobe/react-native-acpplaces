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
   * Returns the current version of the ACPPlaces Extension.
   * @param  {string} Promise a promise that resolves with the extension version
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(ACPPlaces.extensionVersion());
  },

  /**
   * @brief Requests a list of nearby Points of Interest (POI) and returns them in a {Array<ACPPlacesPOI>} Promise.
   *
   * @param location a ACPPlacesLocation object represent the current location of the device
   * @param limit a non-negative number representing the number of nearby POI to return from the request
   * @param {Array<ACPPlacesPOI>} Promise a promise that resolves with array of {@link ACPPlacesPOI} objects that represent the nearest POI to the device
   * and rejects with error if there was an error encountered while getting POIs
   */
  getNearbyPointsOfInterest(location: ACPPlacesLocation, limit: number): Promise<Array<ACPPlacesPOI>> {
    return ACPPlaces.getNearbyPointsOfInterest(location, limit);
  },

  /**
   * @brief Passes a geofence and event type to be processed by the SDK
   *
   * Calling this method will result in an Event being dispatched in the SDK, allowing for rules to be processed
   * as a result of the triggering event.
   *
   * @param geofence the {@link ACPPlacesGeofence} object that triggered the event
   * @param transitionType {@link ACPPlacesGeofenceTransitionType} value indicating whether the device entered or exited the provided region
   */
  processGeofence(geofence: ACPPlacesGeofence, transitionType: number) {
    ACPPlaces.processGeofence(geofence, transitionType);
  },

  /**
   * @brief Returns all Points of Interest (POI) in which the device is currently known to be within.
   *
   * @param {Array<ACPPlacesPOI>} Promise a promise that resolves with array of {@link ACPPlacesPOI} objects that represent the user-within POIs
   * called with an array of ACPPlacesPoi objects that represent the user-within POIs
   */
  getCurrentPointsOfInterest(): Promise<Array<ACPPlacesPOI>> {
    return ACPPlaces.getCurrentPointsOfInterest();
  },

  /**
   * @brief Returns the last latitude and longitude provided to the ACPPlaces Extension.
   *
   * @discussion If the ACPPlaces Extension does not have a valid last known location for the user, the CLLocation
   * object returned in the callback will have lat/lon values of 999.999. The CLLocation object returned by this
   * method will only ever contain valid data for latitude and longitude, and is not meant to be used for plotting
   * course, speed, altitude, etc.
   *
   * @param {ACPPlacesLocation} Promise a promise that resolves with {@link ACPPlacesLocation} object representing the last known lat/lon provided to the extension
   */
  getLastKnownLocation() : Promise<?ACPPlacesLocation> {
    return ACPPlaces.getLastKnownLocation();
  },

  /**
   * Clears out the client-side data for Places in shared state, local storage, and in-memory.
   */
  clear() {
    ACPPlaces.clear();
  },

  /**
   * @brief Sets the authorization status in the Places extension.
   *
   * The status provided is stored in the Places shared state, and is for reference only.
   * Calling this method does not impact the actual location authorization status for this device.
   *
   * @param authStatus the {@link ACPPlacesAuthStatus} to be set for this device
   */
  setAuthorizationStatus(authStatus : string) {
    ACPPlaces.setAuthorizationStatus(authStatus);
  }
};
