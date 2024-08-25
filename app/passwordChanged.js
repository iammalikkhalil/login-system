import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBtn from './components/imageBtn';
import Input from './components/input';
import Btn from './components/btn';

export default function passwordChanged() {
    const navigation = useNavigation();
    return (
        <View contentContainerStyle={styles.container}>
            <View style={{ marginTop: 200, alignItems: "center" }}>
                <Image source={require('../assets/images/done.png')} style={styles.done} />
                <Text style={styles.title}>Password Changed!</Text>
                <Text style={styles.label}>Your password has been changed successfully.</Text>
                <Text>  </Text>
                <Btn
                    text="Back to Login"
                    width='93%'
                    onPress={() => navigation.navigate('login')}
                />
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
        width: "100%",
        marginBottom: 15,
        textAlign: "center",
    },
    label: {
        fontFamily: "Regular",
        fontSize: 15,
        color: "#6A707C",
        textAlign: "center",
        paddingHorizontal: 80,
    },
    done: {
        width: 100,
        height: 100,
        marginBottom: 20,
    }
});