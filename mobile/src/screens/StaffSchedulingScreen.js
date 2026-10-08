import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

export default function StaffSchedulingScreen() { 

    const [staffName, setStaffName] = useState("");
    const [classroom, setClassroom] = useState("");
    const [schedule, setSchedule] = useState("");

    const handleSave = () => {

        if (staffName === "" || classroom === "" || schedule === "") {
            alert("Please enter all details");
            return;
        }

        alert("Staff schedule saved");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Staff Scheduling
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Staff Name"
                value={staffName}
                onChangeText={setStaffName}
            />

            <TextInput
                style={styles.input}
                placeholder="Classroom"
                value={classroom}
                onChangeText={setClassroom}
            />

            <TextInput
                style={styles.input}
                placeholder="Schedule"
                value={schedule}
                onChangeText={setSchedule}
            />

            <Button
                title="Save Schedule"
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
