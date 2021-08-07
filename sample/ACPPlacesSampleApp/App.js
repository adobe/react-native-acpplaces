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


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules, NativeAppEventEmitter,} from 'react-native';

import {ACPPlaces, ACPPlacesAuthStatus, ACPPlacesLocation, ACPPlacesPOI, ACPPlacesGeofence, ACPPlacesGeofenceTransitionType} from '@adobe/react-native-acpplaces';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
          <Text style={styles.welcome}>ACPCore Test App</Text>
          <Button title="ACPPlaces::extensionVersion()" onPress={() => this.extensionVersion()}/>
          <Button title="ACPPlaces::getNearbyPointsOfInterest()" onPress={() => this.getNearbyPointsOfInterest()}/>
          <Button title="ACPPlaces::processGeofence()" onPress={() => this.processGeofence()}/>
          <Button title="ACPPlaces::getCurrentPointsOfInterest()" onPress={() => this.getCurrentPointsOfInterest()}/>
          <Button title="ACPPlaces::getLastKnownLocation()" onPress={() => this.getLastKnownLocation()}/>
          <Button title="ACPPlaces::setAuthorizationStatus()" onPress={() => this.setAuthorizationStatus()}/>
          <Button title="ACPPlaces::clear()" onPress={() => this.clear()}/>
        </ScrollView>
      </View>
    );
  }

  extensionVersion() {
    ACPPlaces.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPPlaces version: " + version));
  }

  getNearbyPointsOfInterest() {
    let location = new ACPPlacesLocation(EXAMPLE_LATITUDE, EXAMPLE_LONGITUDE, null, null, null);
    ACPPlaces.getNearbyPointsOfInterest(location, 2).then(pois => console.log("AdobeExperienceSDK: ACPPlaces pois: " + pois[0]["name"])).catch(error => console.log("AdobeExperienceSDK: ACPPlaces error: " + error));
  }

  processGeofence() {
    // Id from one of the geofence.
    let geofence = new ACPPlacesGeofence(EXAMPLE_GEOFENCE_ID, EXAMPLE_LATITUDE, EXAMPLE_LONGITUDE, EXAMPLE_RADIUS, 10);
    ACPPlaces.processGeofence(geofence, ACPPlacesGeofenceTransitionType.EXIT);
  }

  getCurrentPointsOfInterest() {
    ACPPlaces.getCurrentPointsOfInterest().then(pois => console.log("AdobeExperienceSDK: ACPPlaces pois: " + pois[0]["name"]));
  }

  getLastKnownLocation() {
    ACPPlaces.getLastKnownLocation().then(location => console.log("AdobeExperienceSDK: ACPPlaces location: " + location));
  }

  clear() {
    ACPPlaces.clear();
  }

  setAuthorizationStatus() {
    ACPPlaces.setAuthorizationStatus(ACPPlacesAuthStatus.ALWAYS);
  }
}

const EXAMPLE_LATITUDE = 37.3325958;
const EXAMPLE_LONGITUDE = -121.8910217;
const EXAMPLE_GEOFENCE_ID = "82e2eb52-e925-41a3-9d50-418a2e015608";
const EXAMPLE_RADIUS = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});
