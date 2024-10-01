import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'


const Card = ({image, title,description}) => {
    return (
        <View style={styles.container}>
           <Image
          source={image}    
            style={styles.image}
          />
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDescription}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 80,
        height:80,
        borderRadius: 40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor: Colors.primary,
        backgroundColor:Colors.whiteBg

    },
    image:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        
    },
    textTitle:{
        fontSize: 15,
        color: Colors.fontCard 
    },
    textDescription:{
        fontSize: 8,
        color: Colors.primary,

    }
})

export default Card;