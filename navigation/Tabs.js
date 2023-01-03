import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'react-native';
import Movies from '../screen/Movies';
import My from '../screen/My';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DARK_COLOR } from '../colors';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === 'dark';
  console.log('Tabs:isDark', isDark);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
      }}
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_COLOR:'#eee',
      }}
    >
      <Tab.Screen
        options={{
          title: '영화',
          tabBarLabel: '영화',
          // tabBarBadge: 5,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name='local-movies' size={size} color={color} />
          ),
        }}
        name='Movies'
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: '내가 작성한 댓글',
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='user-circle' size={size} color={color} />
          ),
        }}
        name='My'
        component={My}
      />
    </Tab.Navigator>
  );
}
