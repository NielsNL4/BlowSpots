/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class App extends Component<Props> {  
  render() {    
    return (
      <>
      <StatusBar 
        barStyle = "dark-content"
        />
          <MapView
            provider={MapView.PROVIDER_GOOGLE}     
            style={{flex: 1}}        
            region={{          
              latitude: 42.882004,          
              longitude: 74.582748,          
              latitudeDelta: 0.0922,          
              longitudeDelta: 0.0421        
            }}        
            showsUserLocation={true}
            showsMyLocationButton={true}      
            />  
      </>
    );  
  }}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});