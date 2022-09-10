import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { TabStackParamList } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, Input } from "@rneui/themed"
import { useState } from 'react'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation()
  const [input, setInput] = useState<string>('')

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc' }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator/>}
      />
      <Input containerStyle={tw('bg-white pt-5 pb-0 px-10')} placeholder="Search by Customer" value={input} onChangeText={setInput}/>
    </ScrollView>
  )
}

export default CustomerScreen