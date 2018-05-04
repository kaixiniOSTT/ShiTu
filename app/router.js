/**
 * @flow
 * Created by Rabbit on 2018/4/12.
 */

import React from 'react';

import {
  StackNavigator,
  TabBarBottom,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialBottomTabNavigator
} from 'react-navigation';

import { System } from './utils';
import { Icon, Theme } from './components';

import { ShiTu } from './route/ShiTu';
import { Gank } from "./route/News";
import { Main } from "./route/Main";

import { News } from "./route/News/news";
import { GankTab } from './route/News/route';

import Sample from './test/sample';

const MyTab = createBottomTabNavigator({

  ShiTu: {
    screen: ShiTu,
    navigationOptions: ()=> TabOptions('识兔', 'ShiTu'),
  },
  Gank: {
    screen: Gank,
    navigationOptions: () => TabOptions('干货', 'Gank'),
  },
  Main: {
    screen: Main,
    navigationOptions: ()=> TabOptions('我的', 'Main'),
  },
},{
  initialRouteName: 'Gank',
  backBehavior: 'none',
  tabBarOptions: {
    style: {
      height: 49,
      backgroundColor: 'white'
    },
    showLabel: false,
  }
});
export const MyApp = createStackNavigator({
  MyTab: {
    screen: MyTab,
  },
  Sample: {
    screen: Sample,
  }
},{
  navigationOptions: ({navigation}) => NavigatorOptions(navigation)
});

const NavigatorOptions = (navigation) => {

  const params = navigation.state.routes[navigation.state.index].params;

  const headerTitle = params ? params.title : ''

  console.log(navigation);

  const headerTitleStyle = {
    fontSize: System.iOS ? 23 : 20,
    color: 'white',
    alignSelf: 'center',
    paddingTop: System.Android ? 17 : null,
  };
  const headerStyle = { backgroundColor: Theme.navColor };
  return { headerTitle, headerStyle, headerTitleStyle }
}

const TabOptions = (tabBarTitle, tabBarIconName) => {
  const title = tabBarTitle;
  const tabBarIcon = (({tintColor,focused})=> {
    const color = focused ? Theme.tabBarColor : '#aaa';
    return(
      <Icon name={tabBarIconName} size={30} color={color}/>
    )
  });
  const tabBarVisible = true;
  return { title, tabBarIcon, tabBarVisible };
};