/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer, StackActions, useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import Map from './Components/Map.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MapScreen = ({ navigation }) => {
  return(
    <>
      <Map/>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerButton}/>
      <View style={styles.mapDrawerOverlay} />
    </>
  );
};

export default class App extends Component<Props> {

  render() {    
    return (
      <NavigationContainer>
      <StatusBar barStyle = "dark-content"/>
        <Drawer.Navigator>
          <Drawer.Screen name="Map" component={MapScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );  
  }
}

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
  drawerButton: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.white,
    position: 'absolute',
    marginTop: 50,
    marginLeft: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  marker: {
    width:50,
    height:50,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: '100%',
    width: 20,
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