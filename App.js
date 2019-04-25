import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
// icon library: https://github.com/oblador/react-native-vector-icons#bundled-icon-sets
import { Ionicons } from 'react-native-vector-icons';


// CHALLENGE: Make a STACK NAVIGATOR 

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button title="Learn More" 
                onPress={()=>{
                  navigate('About')
                }} 
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
        />
        {/* <Ionicons name="ios-bug" size={48} color="#58f" />
        <Ionicons.Button 
            name="ios-settings" 
            size={24} 
            color="#fff"
            onPress={()=>console.log("BUG!!")}
        >Bug</Ionicons.Button> */}
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About</Text>
      </View>
    );
  }
}

const bottomTabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state
          let iconName 
          switch(routeName) {
              case 'Home': 
                  iconName = 'ios-bug'
                  break
              case 'Settings': 
                  iconName = 'ios-settings'
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: 'rgb(255, 0, 0)',
        inactiveTintColor: 'hsl(0, 100%, 100%)',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'rgba(255, 255, 255, 1.0)'
    }
  })
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
})
const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsScreen,
}, bottomTabNavigatorConfig);

export default createAppContainer(TabNavigator);