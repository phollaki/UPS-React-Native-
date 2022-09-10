import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Icon } from "@rneui/themed"


export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarActiveTintColor: "#59C1CC",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ focused })=>{
        if(route.name === "Customers"){
          return (
            <Icon
              name="users"
              type="entypo"
              color={focused ? "#59C1CC" : "gray"}
            />
          )
        }else if(route.name === "Orders"){
          return (
            <Icon
              name="box"
              type="entypo"
              color={focused ? "#EB6A7C" : "gray"}
            />
          )
        }
      }
    })}>
      <Tab.Screen name="Customers" component={CustomerScreen}/>
      <Tab.Screen name="Orders" component={OrderScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator