import {SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const rootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Tabata timer</Text>
      <Link href="/timer" style={{color:'blue'}}>Go to Timer</Link>
    </View>
  )
}

export default rootLayout


//this is our home page

