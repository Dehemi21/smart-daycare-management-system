import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function ChildHealthScreen() {

    const [childName, setChildName] = useState("");
    const [allergies, setAllergies] = useState("");
    const [medicalDetails, setMedicalDetails] = useState("");
    const [immunization, setImmunization] = useState("");

    const handleSave = () => {

        if (
            childName === "" ||
            allergies === "" ||
            medicalDetails === "" ||
            immunization === ""
        ) {
            alert("Please enter all details");
            return;
        }

        alert("Health record saved");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Child Health Record
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Child Name"
                value={childName}
                onChangeText={setChildName}
            />

            <TextInput
                style={styles.input}
                placeholder="Allergies"
                value={allergies}
                onChangeText={setAllergies}
            />

            <TextInput
                style={styles.input}
                placeholder="Medical Details"
                value={medicalDetails}
                onChangeText={setMedicalDetails}
            />

            <TextInput
                style={styles.input}
                placeholder="Immunization Details"
                value={immunization}
                onChangeText={setImmunization}
            />

            <Button
                title="Save Health Record"
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
