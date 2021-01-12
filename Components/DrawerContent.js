import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {  
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://avatars1.githubusercontent.com/u/34681292?s=460&u=2e13ff165c0a4a34fb3990f0a2d10fc2207060d8&v=4'
                                }}
                                size={50}
                                backgroundColor={"transparent"}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Niels Renkema</Title>
                                <Caption style={styles.caption}>@NielsNL4</Caption>
                            </View>
                        </View>
                    </View>
 
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color, size}) => (
                            <Icon 
                                name="map"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Map"
                        onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem icon={({color, size}) => (
                            <Icon 
                                name="cog"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => {}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Prefrences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerContent}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name='exit-to-app' 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 50,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    bottomDrawerContent: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
})

