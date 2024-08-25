import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Btn from './components/btn';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

export default function index() {
    const navigation = useNavigation();
    const [loaded, error] = useFonts({
        'Black': require('../assets/fonts/Urbanist-Black.ttf'),
        'Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
        'Thin': require('../assets/fonts/Urbanist-Thin.ttf'),
        'ExtraBold': require('../assets/fonts/Urbanist-ExtraBold.ttf'),
        'Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Btn
                    text="Login"
                    onPress={() => navigation.navigate('login')}
                />

                <Btn
                    backgroundColor="Register"
                    color='#1E232C'
                    text="Register"
                    onPress={() => navigation.navigate('signUp')}
                />
            </View>

            <View style={styles.container2}>
                <Btn
                    backgroundColor=""
                    color='#35C2C1'
                    text="Continue as a guest"
                    borderColor="white"
                    fontFamily='Bold'
                    fontSize={16}
                    onPress={() => navigation.navigate('welcome')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "80%",

        justifyContent: "flex-end"
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "19%",
        justifyContent: "flex-end"
    }
});