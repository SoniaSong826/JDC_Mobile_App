import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import '../assets/fonts/Oswald/Oswald-Bold.ttf';
import '../assets/fonts/Raleway/Raleway-Regular.ttf';
import colors from '../config/colors';
import { useFonts } from 'expo-font';

function AppText({ children, style }) {
	let [fontsLoaded] = useFonts({
		OswaldBold: require('../assets/fonts/Oswald/Oswald-Bold.ttf'),
		RalewayRegular: require('../assets/fonts/Raleway/Raleway-Regular.ttf'),
		RalewayMedium: require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
		RalewayBold: require('../assets/fonts/Raleway/Raleway-Bold.ttf'),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return <Text style={[styles.text, style]}>{children}</Text>;
	}
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "OswaldBold",
		fontSize: 15,
		color: colors.white,
	},
});
export default AppText;
