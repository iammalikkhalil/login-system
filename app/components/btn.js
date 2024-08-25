import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Btn({
    backgroundColor = "#1E232C",
    borderColor = "#1E232C",
    width = "90%",
    borderRadius = 6,
    color = "#ffffff",
    fontFamily = "Regular",
    fontSize = 18,
    text = "Click Me!",
    onPress = () => { console.log("Clicked..."); }
}) {
    return (
        <TouchableOpacity
            style={[styles.btnContainer, { backgroundColor, width, borderColor, borderRadius }]}
            onPress={onPress}
        >
            <Text style={{ color, fontFamily, fontSize }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignSelf: "center",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 15,
        margin: 2,
    }
});