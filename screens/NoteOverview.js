import React, { useState } from "react";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NoteItem from "./parts/NoteItem";
import NoteDetails from "./parts/NoteDetails";

export default function NoteOverview() {
	const [notes, setNotes] = useState([]);
	const [details, setDetails] = useState([false, -1]);
	
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

	const handleDetails = (show, noteKey) => {
		setDetails([show, noteKey]);
	};

	cleanNotes();
	const allNotes = notes.slice(1).map((noteArr, index) => (
		<NoteItem
			handleDetails={handleDetails}
			uniqueKey={index+1}
			title={noteArr[0]}
			content={noteArr[1]}
		/>
	));

	if (details[0]) {
		return (
			<NoteDetails setNotes={setNotes} handleDetails={handleDetails} noteKey={details[1]} />
		);
	} else {
		return <ScrollView style={styles.noteOverview}>{allNotes}</ScrollView>;
	}
}

const styles = StyleSheet.create({
	noteOverview: {
		flex: 0.5,
		paddingHorizontal: 10,
	},
});
