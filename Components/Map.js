import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
  } from "react-native";

const Map = () => {
    return(
    <MapView
    provider={MapView.PROVIDER_GOOGLE}     
    style={{flex: 1}}        
    region={{          
      latitude: 53.215847833246,          
      longitude: 6.5697168836173,          
      latitudeDelta: 0.0922,          
      longitudeDelta: 0.0421        
    }}        
    showsUserLocation={true}
    >
      <Marker 
        coordinate={{
          latitude: 53.216085, 
          longitude: 6.570027
        }} 
        title='Keet Smit Grunn' 
        description='Upgraded versie van Keet Smit Eext'
         >
           <Image
              source={require('../Assets/jonkomarker.png')}
              style={styles.marker} 
            />
            <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>Keet Smit</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/marker.png')} ></Image>
                        </View>
                    </View>
            </Callout>
         </Marker>
         <Marker coordinate={{latitude: 53.213794, longitude: 6.564248}} title='Speeltuintje' description='Alleen maar junks'>
              <Image
                  source={require('../Assets/jonkomarker.png')}
                  style={styles.marker} 
                />
                <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>Speeltuintje</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/speeltuin.jpg')} ></Image>
                        </View>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{latitude: 53.216862, longitude: 6.566402}} title='Niek en Thomas' description='Huis van Niek en Thomas'>
              <Image
                  source={require('../Assets/jonkomarker.png')}
                  style={styles.marker} 
                />
                <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>Niek en Thomas</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/niekenthomas.png')} ></Image>
                        </View>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{latitude: 53.213258, longitude: 6.569490}} title='Hereplein' description='bankje op hereplein'>
              <Image
                  source={require('../Assets/jonkomarker.png')}
                  style={styles.marker} 
                />
                <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>Hereplein</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/hereplein.png')} ></Image>
                        </View>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{latitude: 53.214819, longitude: 6.566765}} title='De Vliegende Hollander' description='Coffeshop'>
              <Image
                  source={require('../Assets/marker.png')}
                  style={styles.coffeeshopMarker} 
                />
                <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>De Vliegende Hollander</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/devlieg.png')} ></Image>
                        </View>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{latitude: 53.218160, longitude: 6.573438}} title='De Schavuit' description='Coffeshop'>
              <Image
                  source={require('../Assets/marker.png')}
                  style={styles.coffeeshopMarker} 
                />
                <Callout tooltip>
                    <View>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>De Schavuit</Text>
                            <Image 
                                style={styles.image}
                                source={require('../Assets/schavuit.png')} ></Image>
                        </View>
                    </View>
                </Callout>
            </Marker>
    </MapView>  
    )
}

export default Map;

const styles = StyleSheet.create({
    marker: {
      width:80,
      height:80,
    },
    coffeeshopMarker: {
        width:50,
        height:50,
      },
    callout: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: 150,
    },
    calloutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 80,
    }
  });