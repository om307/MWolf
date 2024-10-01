import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

  useEffect(() => {
     setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Login screen
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Splash_Screen.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',  
    height: '100%',  
    resizeMode: 'cover',  
  },
});
export default Splash