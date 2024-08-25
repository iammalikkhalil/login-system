import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBtn from './components/imageBtn';
import Input from './components/input';
import Btn from './components/btn';
import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from './utils/validations';


import Loading from './modal/loading';


export default function login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [loading, setLoading] = useState(false);


    const handleEmailChange = (e) => {
        setEmail(e);
        validateEmail({ e, error: setEmailError });
    };

    const handlePasswordChange = (e) => {
        setPassword(e);
        validatePassword({ e, error: setPasswordError });
    };


    return (
        <View contentContainerStyle={styles.container}>
            {loading ? <Loading /> : null}

            <ImageBtn
                marginLeft={25}
                marginTop={50}
                marginBottom={50}
                alignSelf="flex-start"
                source={require('../assets/images/back.png')}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                error={emailError}
                labelFontFamily="Bold"
                fontFamily="Regular"
                inputContainerStyle={{ paddingVertical: 5 }}
                containerStyle={{ marginHorizontal: 15 }}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                error={passwordError}
                labelFontFamily="Bold"
                fontFamily="Regular"
                inputContainerStyle={{ paddingVertical: 5 }}
                containerStyle={{ marginHorizontal: 15 }}
                secureTextEntry // To hide the password input
            />
            <TouchableOpacity onPress={() => { navigation.navigate("forgotPassword") }}>
                <Text style={[styles.label, { textAlign: "right", marginRight: 15, marginBottom: 50, }]}>Forgot Password?</Text>
            </TouchableOpacity>
            <Btn
                text="Login"
                width='93%'
                onPress={() => {
                    setLoading(true);
                    let emailFlag = validateEmail({ e: email, error: setEmailError });
                    let passwordFlag = validatePassword({ e: password, error: setPasswordError });
                    setTimeout(() => {
                        if (emailFlag && passwordFlag) {
                            navigation.replace('welcome');
                        }
                        setLoading(false);
                    }, 1000);
                }}
            />

            <Text style={[styles.label, { textAlign: "center", marginTop: 30, marginBottom: 30, }]}>Or Login with</Text>

            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                <TouchableOpacity onPress={() => { Linking.openURL('https://facebook.com') }} style={{ alignItems: "center", width: "30%", borderColor: "#DADADA", borderRadius: 15, borderWidth: 2, }}>
                    <Image
                        source={require('../assets/images/facebook.png')}
                        style={{ resizeMode: "contain", width: 30, paddingVertical: 35, }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ alignItems: "center", width: "33%", borderColor: "#DADADA", borderRadius: 15, borderWidth: 2, }}>
                    <Image
                        source={require('../assets/images/google.png')}
                        style={{ resizeMode: "contain", width: 30, paddingVertical: 35, }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Linking.openURL('https://apple.com') }} style={{ alignItems: "center", width: "33%", borderColor: "#DADADA", borderRadius: 15, borderWidth: 2, }}>
                    <Image
                        source={require('../assets/images/apple.png')}
                        style={{ resizeMode: "contain", width: 30, paddingVertical: 35, }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("signUp") }} style={{ flexDirection: "row", justifyContent: "center", marginTop: 50, alignSelf: "center" }}>
                <Text style={[styles.label, { fontFamily: "Regular" }]}>Don’t have an account?</Text>
                <Text style={[styles.label, { color: "#35C2C1" }]}> Register Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: "Black",
        color: "#1E232C",
        width: "78%",
        marginLeft: 15,
        marginBottom: 50,
    },
    label: {
        fontFamily: "Bold",
        fontSize: 14,
        color: "#6A707C",
    }
});