import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBtn from './components/imageBtn';
import Input from './components/input';
import Btn from './components/btn';

import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from './utils/validations';
import Loading from './modal/loading';


export default function signUp() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [loading, setLoading] = useState(false);


    const handleUsernameChange = (e) => {
        setUsername(e);
        validateUsername({ e, error: setUsernameError });
    };

    const handleEmailChange = (e) => {
        setEmail(e);
        validateEmail({ e, error: setEmailError });
    };

    const handlePasswordChange = (e) => {
        setPassword(e);
        validatePassword({ e, error: setPasswordError });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e);
        validateConfirmPassword({ password, confirmPassword: e, error: setConfirmPasswordError });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

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
                placeholder="Username"
                value={username}
                onChangeText={handleUsernameChange}
                error={usernameError}
                labelFontFamily="Bold"
                fontFamily="Regular"
                inputContainerStyle={{ paddingVertical: 5 }}
                containerStyle={{ marginHorizontal: 15 }}
            />
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
            <Input
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                error={confirmPasswordError}
                labelFontFamily="Bold"
                fontFamily="Regular"
                inputContainerStyle={{ paddingVertical: 5 }}
                containerStyle={{ marginHorizontal: 15 }}
                secureTextEntry // To hide the confirm password input
            />
            <Btn
                text="Agree and Register"
                width='93%'
                onPress={() => {
                    setLoading(true);
                    let usernameFlag = validateUsername({ e: username, error: setUsernameError });
                    let emailFlag = validateEmail({ e: email, error: setEmailError });
                    let passwordFlag = validatePassword({ e: password, error: setPasswordError });
                    let confirmPasswordFlag = validateConfirmPassword({ password, confirmPassword, error: setConfirmPasswordError });

                    setTimeout(() => {
                        if (usernameFlag && emailFlag && passwordFlag && confirmPasswordFlag) {
                            navigation.replace('welcome');
                        }
                        setLoading(false);
                    }, 1000);
                }}
            />

            <Text style={[styles.label, { textAlign: "center", marginTop: 30, marginBottom: 30, }]}>Or Login with</Text>

            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginBottom: 40 }}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
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