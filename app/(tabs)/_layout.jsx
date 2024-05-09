import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'

import { icons } from '../../constants'


const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-0.5">
            <Image 
            source={icon}
            resizeMode="contain"
            className="w-6 h-6"
            
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
    
    <Tabs
    screenOptions={{
        tabBarShowLabel: false
    }}
    >

        <Tabs.Screen 
        name="timer"
        options={{

            title: 'Timer',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (

                <TabIcon 
                icon={icons.timer}
                color={color}
                name="Timer"
                focused={focused}
                />
            )
        }}
        />
    </Tabs>
    </>
  )
}

export default TabsLayout