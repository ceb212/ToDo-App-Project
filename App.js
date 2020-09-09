/** @format */

import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import MyTodo from "./components/myTodo";

export default function App() {
	const [todos, setTodos] = useState([]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [{ text: text, key: Math.random().toString() }, ...prevTodos];
			});
		} else {
			Alert.alert("Hmm Nanay!", "Atleast 3 chars long", [
				{ text: "Ok", onPress: () => console.log("alert closed") },
			]);
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
				console.log("dismissed keyboard");
			}}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<MyTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
		flex: 1,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
