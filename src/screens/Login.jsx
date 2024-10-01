import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';
import useLoginForm from '../hooks/UseLoginForm';

const Login = ({ navigation }) => {
    const { email, setEmail, password, setPassword, errors, handleLogin } = useLoginForm();

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>

                <View style={styles.country}>

                    <Text style={styles.countryText}>Germany</Text>
                </View>
            </View>

            {/* Welcome Section */}
            <View style={styles.welcomeSection}>
                <Text style={styles.welcomeText}>Welcome to <Text style={styles.brandName}>Metawolf Solar</Text></Text>
                <Text style={styles.subText}>let's get started</Text>
            </View>


            <View style={styles.lowerSection}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                </View>

                {/* Form Section */}
                <View style={styles.form}>
                <TextInput
            placeholder="Email"
            style={styles.input}
            underlineColorAndroid="black"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            underlineColorAndroid="black"
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                    
                </View>

                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={()=>handleLogin(navigation)}>
                        <Text style={styles.loginButtonText}>Login</Text>

                    </TouchableOpacity>
                     

                    <View style={styles.registerContainer}>

                        
                        <Text style={styles.registerText}>Don’t have access, </Text>
                        <TouchableOpacity>
                            <Text style={styles.registerLink}>register a new account</Text>
                        </TouchableOpacity>
                    </View>
                 
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg//'#002d4d',
    },
    header: {
        backgroundColor: Colors.primary,//'#012A4A',
        paddingTop: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    country: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    welcomeSection: {
        backgroundColor: '#012A4A',
        paddingVertical: 40,
        paddingHorizontal: 20,
     },
    welcomeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
    },
    brandName: {
        color: '#F7B500',
        fontWeight: '700',
        fontSize: 28,
    },
    subText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    lowerSection: {
        flex:1,
         borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
      },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    logo: {
        width: 150,
        height: 60,
        resizeMode: 'contain',
    },
    form: {
        paddingHorizontal: 20,
  
    },
    input: {
        marginBottom: 15,
        underlineColorAndroid:'black'
    },
    forgotPassword: {
        color: '#7E7E7E',
        textAlign: 'right',
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: Colors.primaryBg,
        marginVertical: 20,
        height:50,
        width:'35%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        alignSelf:'center',
    },
    loginButtonText: {
        color: '#F7B500',
        fontSize: 17,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerText: {
        color: '#7E7E7E',
    },
    registerLink: {
        color: '#000',
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
});

export default Login