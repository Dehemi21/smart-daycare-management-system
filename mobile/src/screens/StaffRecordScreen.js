import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function StaffRecordScreen() {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");

    const handleSave = () => {

        if (name === "" || position === "" || phone === "") {
            alert("Please enter all details");
            return;
        }

        alert("Staff record saved");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Staff Record
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Staff Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Position"
                value={position}
                onChangeText={setPosition}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            <Button
                title="Save Staff"
                onPress={handleSave}
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
