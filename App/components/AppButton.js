import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import colors from '../config/colors';
import AppLoading from 'expo-app-loading';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
function AppButton({ title, style, onPress, textStyle }) {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<AppText style={[styles.text, textStyle]}>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'RalewayMedium',
		fontSize: 13,
		color: colors.white,
	},
});

export default AppButton;
