import React, { useState } from "react";
import {
	Alert,
	StyleSheet,
	Text,
	ScrollView,
	Button,
	TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NoteDetails(props) {
	const [note, setNote] = useState([]);
	const [edit, setEdit] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const getNote = async () => {
		await AsyncStorage.getItem("allNotes")
			.then((res) => JSON.parse(res))
			.then((lst) => {
				setNote(lst[props.noteKey]);
				setTitle(note[0]);
				setContent(note[1]);
			})
			.catch((e) => Alert.alert("Note with given key doesn't exist."));
	};

	const handleDelete = async () => {
		await AsyncStorage.getItem("allNotes")
			.then((res) => JSON.parse(res))
			.then((lst) => {
				let new_lst = [
					...lst.slice(0, props.noteKey),
					...lst.slice(props.noteKey + 1),
				];

				AsyncStorage.setItem("allNotes", JSON.stringify(new_lst));
				props.setNotes(new_lst);
				props.handleDetails(false, -1);
			})
			.catch((e) => Alert.alert("Error while trying to delete note :("));
	};

	const handleEdit = async () => {
		if (edit) {
			await AsyncStorage.getItem("allNotes")
				.then((res) => JSON.parse(res))
				.then((lst) => {
					let noteItem = [title, content];

					lst[props.noteKey] = noteItem;
					AsyncStorage.setItem("allNotes", JSON.stringify(lst));
				})
				.catch((e) =>
					Alert.alert(
						"An Error occurred while trying to edit note :("
					)
				);
		}

		setEdit(!edit);
	};

	getNote();

	return (
		<ScrollView>
			<Text style={styles.labelText}>Note Title</Text>
			{edit ? (
				<Input
					style={styles.textInput}
					value={title}
					onChangeText={(text) => setTitle(text)}
				/>
			) : (
				<Text style={styles.text}>{title}</Text>
			)}
			<Text style={styles.labelText}>Note Content</Text>
			{edit ? (
				<Input
					style={styles.textInput}
					value={content}
					onChangeText={(text) => setContent(text)}
				/>
			) : (
				<Text style={styles.text}>{content}</Text>
			)}
			<Button
				title={"Back"}
				onPress={() => props.handleDetails(false, -1)}
				color="#808080"
			/>
			<Text> </Text>
			<Button
				title={edit ? "Save" : "Edit"}
				color={edit ? "green" : "blue"}
				onPress={handleEdit}
			/>
			<Text> </Text>
			<Button title={"Delete"} onPress={handleDelete} color="#c70000" />
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
	textInput: {
		width: "90%",
		height: 44,
		backgroundColor: "#ffffff",
		borderRadius: 6,
		paddingHorizontal: 10,
	},
});
