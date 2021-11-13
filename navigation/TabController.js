import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NoteOverview from "../screens/NoteOverview";
import CreateNoteView from "../screens/CreateNote";
import SettingsView from "../screens/Settings";

const Tab = createBottomTabNavigator();

import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function TabController() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				initialRouteName: "Home",
				style: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					backgroundColor: "#ffffff",
					borderRadius: 15,
					height: 90,
					...styles.shadow,
				},
			}}
		>
			<Tab.Screen
				name="Note Overview"
				component={NoteOverview}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{ color: focused ? "#e32f45" : "#748c94" }}
						>
							Home
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require("../assets/icons/home.png")}
								resize="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? "#e32f45" : "#748c94",
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Create Note"
				component={CreateNoteView}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{ color: focused ? "#e32f45" : "#748c94" }}
						>
							Create Note
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={
									focused
										? require("../assets/icons/createNoteFocused.png")
										: require("../assets/icons/createNote.png")
								}
								resize="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? "#e32f45" : "#748c94",
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsView}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{ color: focused ? "#e32f45" : "#748c94" }}
						>
							Settings
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={
									focused
										? require("../assets/icons/settingsFocused.png")
										: require("../assets/icons/settings.png")
								}
								resize="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? "#e32f45" : "#748c94",
								}}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#7F5DF0",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
