import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector-icons

export default function Input({
    label,
    placeholder,
    value,
    onChangeText,
    onFocus,
    onBlur,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'none',
    multiline = false,
    numberOfLines = 1,
    maxLength,
    editable = true,
    placeholderTextColor = '#8A8A8A',
    inputStyle = {},
    containerStyle = {},
    labelStyle = {},
    error,
    errorStyle = {},
    fontFamily = 'Regular', // Default font family for input text
    labelFontFamily = 'Bold', // Default font family for label text
    inputContainerStyle,
    ...props
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={[styles.label, labelStyle, { fontFamily: labelFontFamily }]}>{label}</Text>}
            <View style={[styles.inputContainer, inputContainerStyle]}>
                <TextInput
                    style={[styles.input, inputStyle, { fontFamily }]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    maxLength={maxLength}
                    editable={editable}
                    placeholderTextColor={placeholderTextColor}
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                        <Ionicons
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="#8A8A8A"
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 14,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#000',
    },
    iconContainer: {
        padding: 5,
    },
    error: {
        marginTop: 5,
        color: 'red',
        fontSize: 12,
    },
});