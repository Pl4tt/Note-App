import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NoteItem from "./parts/Note";

export default function NoteOverview() {
	const [notes, setNotes] = useState([]);
	const [showDetails, setDetails] = useState(false);

	const cleanNotes = async () => {
		await AsyncStorage.getItem("allNotes")
			.then((res) => JSON.parse(res))
			.then((arr) => {
				if (arr === null) {
					arr = [[" ", " "]];
					AsyncStorage.setItem("allNotes", JSON.stringify(arr));
				}
				setNotes(arr);
			});
	};

	cleanNotes();
	const allNotes = notes.map((noteArr) => (
		<NoteItem
			title={noteArr[0]}
			content={noteArr[1]}
		/>
	));

	return <ScrollView style={styles.noteOverview}>{allNotes}</ScrollView>;
}

const styles = StyleSheet.create({
	noteOverview: {
		flex: 0.5,
		paddingHorizontal: 10,
	},
});