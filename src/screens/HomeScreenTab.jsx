import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import HomeStatusSection from '../components/HomeStatusSection';
import { Constants } from '../constants/constants';
import { Colors } from '../constants/colors';


const HomeScreenTab = () => {
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.navIcons}>
                    <Image source={require('../assets/home/Setup.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />

                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Image source={require('../assets/home/Share.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                </View>
            </View>

            {/* Notification and Weather */}
            <View style={styles.notificationWeather}>
                <View style={styles.notification}>
                    <Image source={require('../assets/home/Group91.png')} style={{ height: 60, width: 40 }} />
                    <View style={styles.notificationBadge}>
                        <Text style={styles.notificationText}>{Constants.chargingNotification}</Text>
                    </View>
                </View>
                <View style={styles.weather}>
                    <Image source={require('../assets/home/Group92.png')} style={{ height: 60, width: 60, resizeMode: 'contain' }} />
                    <Text style={styles.weatherText}>{Constants.temprature}°</Text>
                </View>
            </View>
            {/*View Frame */}
            <View>
            </View>
            {/* System Status Section */}
            <HomeStatusSection />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteBg,
    },
    header: {
        backgroundColor: Colors.primary,
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
        height: '25%',
        width: '100%',
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 100,
        overflow: 'hidden',

    },

    navIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    notificationWeather: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 40,
    },
    notification: {
        position: 'relative',
    },
    notificationBadge: {
        backgroundColor: '#FF4D4D',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: -30,
    },
    notificationText: {
        color: Colors.whiteBg,
        fontSize: 12,
        fontWeight: 'bold',
    },
    weather: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    weatherText: {
        color: Colors.textPrimary,
        fontSize: 16,
        marginLeft: 5,
    },
    systemStatusText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    
});

export default HomeScreenTab