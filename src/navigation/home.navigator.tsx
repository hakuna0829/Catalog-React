import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LayoutsNavigator } from './layouts.navigator';
import { ComponentsNavigator } from './components.navigator';
import { ThemesNavigator } from './themes.navigator';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import { HomeDrawer } from '../scenes/home/home-drawer.component';
import { LibrariesScreen } from '../scenes/libraries/libraries.component';
import { MessagingNavigator } from './messaging.navigator';
import { Trainings1Screen } from '../scenes/dashboards/trainings-1.component';
import { SettingsScreen } from '../scenes/dashboards/settings.component';
import { LeadsNavigator } from './leads.navigator';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Catalogs' : 'Leads';

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Catalogs', 'Leads', 'Messages', 'Profile'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: true};//currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator 
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName='Messages'
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Catalogs' component={Trainings1Screen}/>
    <BottomTab.Screen name='Leads' component={LeadsNavigator}/>
    <BottomTab.Screen name='Messages' component={MessagingNavigator}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: true }}
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    <Drawer.Screen name='Settings' component={SettingsScreen}/>
    <Drawer.Screen name='Libraries' component={LibrariesScreen}/>
    {__DEV__&&<Drawer.Screen name='Components' component={ComponentsNavigator}/>}
    <Drawer.Screen name='Layouts' component={LayoutsNavigator}/>
    <Drawer.Screen name='Themes' component={ThemesNavigator}/>
  </Drawer.Navigator>
);
