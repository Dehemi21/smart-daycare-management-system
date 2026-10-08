import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function ChildRecordScreen() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [guardian, setGuardian] = useState("");

    const handleSave = () => {

        if (name === "" || age === "" || guardian === "") {
            alert("Please enter all details");
            return;
        }

        alert("Child record saved");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Child Record
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Child Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Guardian Name"
                value={guardian}
                onChangeText={setGuardian}
            />

            <Button
                title="Save Child"
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
