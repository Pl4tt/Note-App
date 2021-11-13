import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateNoteView() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		await AsyncStorage.getItem("allNotes")
			.then((res) => JSON.parse(res))
			.then((arr) => {
				if (title === "" || content === "") {
					throw new Error("Note cannot be empty!");
				}

				const newNote = [title, content];

				if (arr === null) {
					AsyncStorage.setItem("allNotes", JSON.stringify([newNote]));
				} else {
					arr.push(newNote);
					AsyncStorage.setItem("allNotes", JSON.stringify(arr));
				}
				setTitle("");
				setContent("");
			})
			.catch((e) =>
				Alert.alert(
					"An error executed while trying to create new note :("
				)
			);
	};

	return (
		<View>
			<Text style={styles.labelText}>Note Title</Text>
			<TextInput
				style={styles.textInput}
				placeholder={"Note title"}
				onChangeText={(text) => setTitle(text)}
				value={title}
			/>
			<Text style={styles.labelText}>Note Content</Text>
			<TextInput
				style={[
					styles.textInput,
					{
						height: 100,
						paddingVertical: 10,
						textAlignVertical: "top",
					},
				]}
				value={content}
				onChangeText={(text) => setContent(text)}
				multiline={true}
				placeholder={"Note Content"}
			/>
			<Button onPress={handleSubmit} title="Add Note" />
		</View>
	);
}

const styles = StyleSheet.create({
	textInput: {
		width: "90%",
		height: 44,
		backgroundColor: "#f1f3f6",
		borderRadius: 6,
		paddingHorizontal: 10,
	},
	labelText: {
		paddingHorizontal: 10,
		fontSize: 24,
	},
});
