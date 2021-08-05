import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

function MenuItem({ title, style, onPress, onPressText, textColor, color = 'darkGray' }) {
	return (
		<TouchableHighlight style={[styles.button, { backgroundColor: colors[color] }, style]} onPress={onPress}>
			<Text style={[styles.text, { color: colors[textColor] }]}>
				{title}
			</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: {
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'OswaldBold',
		fontSize: 15,
		paddingVertical: 10,
		paddingHorizontal: 8,
	},
});

export default MenuItem;
