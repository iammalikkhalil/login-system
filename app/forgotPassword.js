import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBtn from './components/imageBtn';
import Input from './components/input';
import Btn from './components/btn';

import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from './utils/validations';


import Loading from './modal/loading';




export default function forgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [loading, setLoading] = useState(false);


    const handleEmailChange = (e) => {
        setEmail(e);
        validateEmail({ e, error: setEmailError });
    };



    return (
        <View contentContainerStyle={styles.container}>
            {loading ? <Loading /> : null}

            <View style={{ height: "85%" }}>
                <ImageBtn
                    marginLeft={25}
                    marginTop={50}
                    marginBottom={50}
                    alignSelf="flex-start"
                    source={require('../assets/images/back.png')}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.label}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                <Input
                    placeholder=" EnterEmail"
                    value={email}
                    onChangeText={handleEmailChange}
                    error={emailError}
                    labelFontFamily="Bold"
                    fontFamily="Regular"
                    inputContainerStyle={{ paddingVertical: 5 }}
                    containerStyle={{ marginHorizontal: 15 }}
                />
                <Text>  </Text>
                <Btn
                    text="Send Code"
                    width='93%'
                    onPress={() => {
                        setLoading(true);
                        let emailFlag = validateEmail({ e: email, error: setEmailError });
                        setTimeout(() => {
                            if (emailFlag) {
                                navigation.replace('otpScreen');
                            }
                            setLoading(false);
                        }, 1000);
                    }}
                />

            </View>
            <View contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("login") }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 50, alignSelf: "center" }}>
                    <Text style={styles.label}>Remember Password?</Text>
                    <Text style={[styles.label, { fontFamily: "Bold", marginLeft: -15, color: "#35C2C1" }]}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: "Black",
        color: "#1E232C",
        width: "78%",
        marginLeft: 15,
        marginBottom: 15,
    },
    label: {
        fontFamily: "Regular",
        fontSize: 15,
        color: "#6A707C",
        marginHorizontal: 15,
        marginBottom: 50,
    }
});