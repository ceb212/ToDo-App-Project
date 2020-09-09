/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}> TO DO </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 38,
		backgroundColor: "darkslategray",
	},
	title: {
		textAlign: "center",
		color: "#fff",
		fontSize: 25,
		fontWeight: "normal",
		fontStyle: "italic",
	},
});
