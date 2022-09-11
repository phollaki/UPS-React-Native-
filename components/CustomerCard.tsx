import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrders'
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';

type Props = {
  userId: string;
  name: string;
  email: string;
}

const CustomerCard = ({userId, email, name}:Props) => {
  const {loading, error, orders} = useCustomerOrders(userId)
  const navigation = useNavigation()
  const tw = useTailwind()

  return (
    <TouchableOpacity>
      <Card containerStyle={tw('p-5 rounded-lg')}>

        <View>
          <View style={tw('flex-row justify-between')}>
            <View>
              <Text style={tw('text-2xl font-bold mb-1')}>{name}</Text>
              <Text style={[tw('text-sm'), { color: "#59C1CC" }]}>ID: {userId}</Text>
            </View>
            <View style={tw('flex-row items-center justify-end')}>
              <Text style={{ color: "#59C1CC" }}>{loading ? 'Loading...' : orders.length} x </Text>
              <Icon type="entypo" name="box" color="#59C1CC" size={50} style={tw('mb-5 ml-auto')}/>
            </View>
          </View>

        </View>

          <Card.Divider/>
          <Text>{email}</Text>

      </Card>
    </TouchableOpacity>
  )
}

export default CustomerCard