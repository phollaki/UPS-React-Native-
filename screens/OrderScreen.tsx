import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn/dist'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import { TabStackParamList } from '../navigator/TabNavigator'
import DeliveryCard from '../components/DeliveryCard'

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

const OrderScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const {params:{order}} = useRoute<OrderScreenRouteProp>()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTitleStyle: { color: 'black' },
      headerTintColor: "#EB6A7C",
      headerBackTitle: "Deliveries"
    })
  },[order])

  return (
    <SafeAreaView style={tw("-mt-2")}>
      <DeliveryCard order={order} fullWidth/>
    </SafeAreaView>
  )
}

export default OrderScreen