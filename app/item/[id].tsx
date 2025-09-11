import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const selectitem = () => {
    const params = useLocalSearchParams();
    console.log("params", params);
  return (
    <View className="w-full flex-1 bg-gray-100 justify-center items-center">
            <Text className="text-lg font-bold text-blue-500">{params?.id}</Text>
            <Text className="text-lg font-bold text-blue-500">{params?.name}</Text>
            <Text className="text-lg font-bold text-blue-500">{params?.age}</Text>
            <Text className="text-lg font-bold text-blue-500">{params?.address}</Text>
            <Text className="text-lg font-bold text-blue-500">This is item page</Text>
       </View>
  )
}

export default selectitem