import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Card from './Card';
import { StatusInfo } from './StatusInfo'; 



const HomeStatusSection = () => {
    let img = StatusInfo.bottomLeft.image
    console.log(img)
    console.log('---,%d',StatusInfo.bottomLeft.image);

    return (
        
             <View style={styles.container}>
              {/* Main large image */}
              <Image
                source={require('../assets/home/Frame.png')} // Large image
                style={styles.largeImage}
              />
        
              {/* Top-left card */}
              <View style={styles.topLeft}>
                <Card image={StatusInfo.topLeft.image} title={StatusInfo.topLeft.title} description={StatusInfo.topLeft.description} />
              </View>
        
              {/* Top-right card */}
              <View style={styles.topRight}>
                <Card image={StatusInfo.topRignt.image} title={StatusInfo.topRignt.title} description={StatusInfo.topRignt.description}/>
              </View>
        
              {/* Bottom-left card */}
              <View style={styles.bottomLeft}>
                <Card image={StatusInfo.bottomLeft.image} title={StatusInfo.bottomLeft.title} description={StatusInfo.bottomLeft.description} />
              </View>
        
              {/* Bottom-right card */}
              <View style={styles.bottomRight}>
                <Card image={StatusInfo.bottomRight.image} title={StatusInfo.bottomRight.title} description={StatusInfo.bottomRight.description} />
              </View>
            </View>
    )}
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',  
            alignItems: 'center',  
          },
          largeImage: {
            width: 180,
            height: 180,
            resizeMode: 'contain',
            position: 'relative', 
          },
          topLeft: {
            position: 'absolute',
            top: 120,
            left: 75,
          },
          topRight: {
            position: 'absolute',
            top: 120,
            right: 75,
          },
          bottomLeft: {
            position: 'absolute',
            bottom: 120,
            left: 75,
          },
          bottomRight: {
            position: 'absolute',
            bottom: 120,
            right: 75,
          },
    });

export default HomeStatusSection