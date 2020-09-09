/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View style={styles.item}>
				<MaterialCommunityIcons name="delete-variant" size={20} color="black" />
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 10,
		marginTop: 10,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 15,
		flexDirection: "row",
	},
	itemText: {
		marginLeft: 15,
	},
});
