import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const TabBarComponent = ({ navigation }) => {

    const onSelect = (index) => {
        const selectedTabRoute = navigation.state.routes[index];
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
            <BottomNavigationTab title='HomeScreen' />
            <BottomNavigationTab title='LoginScreen' />
            <BottomNavigationTab title='SettingsScreen' />
        </BottomNavigation>
    );
};

const TabNavigator = createBottomTabNavigator({
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    SettingsScreen: {
        screen: props => <SettingsScreen {...props} />
    }
}, {
    tabBarComponent: TabBarComponent,
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    TabScreen: {
        screen: TabNavigator,
    },

}, {
    headerMode : 'none',
    initialRouteName: 'TabScreen'
});

export default createAppContainer(AppNavigator);