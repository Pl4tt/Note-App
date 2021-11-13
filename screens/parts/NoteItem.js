import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export default function NoteItem(props) {
	const handleItemPress = () => {
		props.handleDetails(true, props.uniqueKey);
	};

	return (
		<ListItem
			key={props.uniqueKey}
			button
			bottomDivider
			onPress={handleItemPress}
		>
			<ListItem.Content>
				<ListItem.Title>{props.title}</ListItem.Title>
				<ListItem.Subtitle>{props.content}</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Chevron />
		</ListItem>
	);
}

const styles = StyleSheet.create({});
