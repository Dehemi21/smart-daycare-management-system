import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function ParentLoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("Please enter email and password");
            return;
        }

        alert("Login successful");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Parent / Guardian Login
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button
                title="Login"
                onPress={handleLogin}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 5
    }

});
