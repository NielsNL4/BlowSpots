import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SignUpScreen from './SignUpScreen.js';
import SignInScreen from './SignUpScreen.js';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../Assets/BackgroundImage.jpg')}
                resizeMode="stretch"
                style={styles.backgroundImage}
                />
            <View style={styles.header}>
                
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay Connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() =>navigation.navigate('SignUpScreen')}>
                    <View style={styles.signIn}>
                        <Text style={styles.textSign}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cb88b'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        bottom: 150,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#363636',
        marginBottom: 10,
    },
    text: {
        color: '#636363',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#5cb88b',
        width: 150,
        borderRadius: 25,
        alignItems: 'flex-end',
        padding: 5,
        marginTop: 50,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    }
});