import React, { useState } from "react";
import { Alert, StyleSheet, Text, ScrollView, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NoteDetails(props) {
	const [note, setNote] = useState([]);

	const getNote = async () => {
		await AsyncStorage.getItem("allNotes")
			.then((res) => JSON.parse(res))
			.then((lst) => {
				setNote(lst[props.noteKey]);
			})
			.catch((e) => Alert.alert("Note with given key doesn't exist."));
	};

	getNote();

	return (
		<ScrollView>
			<Text style={styles.labelText}>Note Title</Text>
			<Text style={styles.text}>{note[0]}</Text>
			<Text style={styles.labelText}>Note Content</Text>
			<Text style={styles.text}>{note[1]}</Text>
			<Button
				title={"Back"}
				onPress={() => props.handleDetails(false, -1)}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
	labelText: {
		paddingHorizontal: 10,
		fontSize: 24,
	},
});
