import { Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const rootLayout = () => {
  return (
<Stack>
<Stack.Screen name="index" options={{showLOL: false}} />
</Stack>
  )
}

export default rootLayout


//will be present in all the routes
