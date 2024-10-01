import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenTab from './HomeScreenTab';


const TabIcons = {
    Tab1: {
      active: require('../assets/tabs/Production.png'),
      inactive: require('../assets/tabs/Production1.png'),
    },
    Tab2: {
      active: require('../assets/tabs/Energy.png'),
      inactive: require('../assets/tabs/Energy1.png'),
    },
    Tab3: {
      active: require('../assets/tabs/Home.png'),
      inactive: require('../assets/tabs/Home1.png'),
    },
    Tab4: {
      active: require('../assets/tabs/analysis.png'),
      inactive: require('../assets/tabs/analysis1.png'),
    },
    Tab5: {
      active: require('../assets/tabs/Menu.png'),
      inactive: require('../assets/tabs/Menu1.png'),
    },
  };

  const Tab = createBottomTabNavigator();

// Tab Screens
function Production() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PRODUCTION</Text>
      </View>
    );
  }
  
  function Energy() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ENERGY</Text>
      </View>
    );
  }
  
  
  function Analysis() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ANALYSIS</Text>
      </View>
    );
  }
  
  function Menu() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MENU</Text>
      </View>
    );
  }
  
const Home = () => {
    return (
        <Tab.Navigator
        initialRouteName="Tab3" 
          screenOptions={({ route }) => ({
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              let iconSource;
    
              // Determine which icon to use based on route and focus state
              if (route.name === 'Tab1') {
                iconSource = focused ? TabIcons.Tab1.active : TabIcons.Tab1.inactive;
              } else if (route.name === 'Tab2') {
                iconSource = focused ? TabIcons.Tab2.active : TabIcons.Tab2.inactive;
              } else if (route.name === 'Tab3') {
                iconSource = focused ? TabIcons.Tab3.active : TabIcons.Tab3.inactive;
              } else if (route.name === 'Tab4') {
                iconSource = focused ? TabIcons.Tab4.active : TabIcons.Tab4.inactive;
              } else if (route.name === 'Tab5') {
                iconSource = focused ? TabIcons.Tab5.active : TabIcons.Tab5.inactive;
              }
    
              // Render the icon
              return <Image source={iconSource} style={{ width: 25, height: 25, resizeMode:'contain'}} />;
            },
            tabBarActiveTintColor: '#007aff',   
            tabBarInactiveTintColor: 'gray',   
          })}
        >
          <Tab.Screen name="Tab1" component={Production} options={{ tabBarLabel: 'Production' }} />
          <Tab.Screen name="Tab2" component={Energy} options={{ tabBarLabel: 'Energy' }} />
          <Tab.Screen name="Tab3" component={HomeScreenTab} options={{ tabBarLabel: 'Home' }} />
          <Tab.Screen name="Tab4" component={Analysis} options={{ tabBarLabel: 'Analysis' }} />
          <Tab.Screen name="Tab5" component={Menu} options={{ tabBarLabel: 'Menu' }} />
        </Tab.Navigator>
      );
    }

export default Home