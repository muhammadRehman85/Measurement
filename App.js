import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Form from './screens/Form';
import StepTwoForm from './screens/StepTwoForm';
import StepThreeForm from './screens/StepThreeForm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={Form}  options={{headerShown:false}}/>
        <Stack.Screen name="StepTwoForm" component={StepTwoForm}  options={{headerShown:false}}/>
        <Stack.Screen name="StepThreeForm" component={StepThreeForm}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
