import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import DropDownItem from "react-native-drop-down-item";

export default function NoteItem(props) {
	return (
		<ListItem key={props.uniqueKey} button bottomDivider onPress={() => console.log(props.uniqueKey)}>
			<ListItem.Content>
				<ListItem.Title>{props.title}</ListItem.Title>
				<ListItem.Subtitle>{props.content}</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Chevron />
		</ListItem>
	);
}

const styles = StyleSheet.create({});
