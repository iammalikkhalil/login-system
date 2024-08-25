import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBtn from './components/imageBtn';
import Input from './components/input';
import Btn from './components/btn';

import { validateOTP } from './utils/validations';
import Loading from './modal/loading';


export default function otpScreen() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const [loading, setLoading] = useState(false);


    const handleOtpChange = (e) => {
        setOtp(e);
        validateOTP({ e, error: setOtpError });
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
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.label}>Enter the verification code we just sent on your otp address.</Text>
                <Input
                    placeholder="Enter Otp"
                    value={otp}
                    onChangeText={handleOtpChange}
                    error={otpError}
                    labelFontFamily="Bold"
                    fontFamily="Regular"
                    inputContainerStyle={{ paddingVertical: 5 }}
                    containerStyle={{ marginHorizontal: 15 }}
                />
                <Text>  </Text>
                <Btn
                    text="Verify"
                    width='93%'
                    onPress={() => {
                        setLoading(true);
                        let otpFlag = validateOTP({ e: otp, error: setOtpError });
                        setTimeout(() => {
                            if (otpFlag) {
                                navigation.replace('resetPassword');
                            }
                            setLoading(false);
                        }, 1000);
                    }}
                />

            </View>
            <View contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("login") }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 50, alignSelf: "center" }}>
                    <Text style={styles.label}>Didn’t received code?</Text>
                    <Text style={[styles.label, { fontFamily: "Bold", marginLeft: -15, color: "#35C2C1" }]}> Resend</Text>
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