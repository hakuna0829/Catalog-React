import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile7Screen } from '../scenes/social/profile-7.component';
import { LeadsListScreen } from '../scenes/leads/leads-list.component';

const Stack = createStackNavigator();

export const LeadsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='LeadsList' component={LeadsListScreen}/>
    <Stack.Screen name='Profile' component={Profile7Screen}/>
  </Stack.Navigator>
);
