import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function DailyActivityScreen() {

    const [meal, setMeal] = useState("");
    const [nap, setNap] = useState("");
    const [learning, setLearning] = useState("");

    const handleSave = () => {

        if (meal === "" || nap === "" || learning === "") {
            alert("Please enter all details");
            return;
        }

        alert("Daily activity saved");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Daily Activity
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Meal Details"
                value={meal}
                onChangeText={setMeal}
            />

            <TextInput
                style={styles.input}
                placeholder="Nap Details"
                value={nap}
                onChangeText={setNap}
            />

            <TextInput
                style={styles.input}
                placeholder="Learning Activity"
                value={learning}
                onChangeText={setLearning}
            />

            <Button
                title="Save Activity"
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
