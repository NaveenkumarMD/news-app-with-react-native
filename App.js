import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Tesla from './Screens/Tesla'
import Apple from './Screens/Apple'
import Facebook from './Screens/Facebook'
import Amazon from './Screens/Amazon'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import Google from './Screens/Google'
import Details from './Screens/Details'

const Tab=createBottomTabNavigator()
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator   screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Tesla" component={Detailsnav} />
        <Tab.Screen name="Apple" component={Apple}/>
        <Tab.Screen name="Facebook" component={Facebook}/>
        <Tab.Screen name="Amazon" component={Amazon}/>
        <Tab.Screen name="Google" component={Google}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Tesla') {
        return <Fontisto name="tesla" size={size} color={color} />
      } else if (route.name === 'Amazon') {
          iconName ='logo-amazon'
      }
      else if (route.name === 'Facebook') {
          iconName = 'md-logo-facebook'
      }
      else if (route.name === 'Apple') {
          iconName = 'logo-apple'
      }
      else if (route.name === 'Google') {
          iconName = 'ios-logo-google'
      }

      return <Ionicons name={iconName} size={size} color={color} />;
  },
})
const stack=createStackNavigator()
function Detailsnav(){
  return(
    <stack.Navigator>
      <stack.Screen name="Tesla" component={Tesla} options={{headerShown:false}}/>
      <stack.Screen  name="Details" component={Details} options={{headerShown:false}}/>
    </stack.Navigator>
  )
}