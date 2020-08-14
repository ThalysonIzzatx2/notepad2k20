import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/Home';
import Note from '../pages/Note';
import New from '../pages/New';
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
  );
}

export default Routes;