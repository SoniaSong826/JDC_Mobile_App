import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

const windowWidth = Dimensions.get('window').width;
function ServiceRight({ navigation, title, paragraph, image, toScreen }) {
	return (
		<TouchableHighlight underlayColor={colors.middleGray}>
			<View style={styles.container}>
				<View style={styles.threeTexts}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.paragraph}>{paragraph}</AppText>
					<AppButton onPress={() => navigation.navigate(toScreen)} title={'Learn More >'}></AppButton>
				</View>
				<View style={styles.twoPictures}>
					<View style={styles.blueCard}></View>
					<Image style={styles.image} source={image} />
				</View>
			</View>
		</TouchableHighlight>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: windowWidth,
		paddingHorizontal: 10,
		marginVertical: 8,
	},
	twoPictures: {
		width: (windowWidth - 30) * 0.45,
		height: (windowWidth - 30) * 0.3 + 10,
	},
	image: {
		width: (windowWidth - 30) * 0.45 - 10,
		height: (windowWidth - 30) * 0.3,
		position: 'absolute',
		marginTop: 10,
		marginLeft: 10,
	},
	blueCard: {
		backgroundColor: colors.lightOrange,
		width: (windowWidth - 30) * 0.45 - 10,
		height: (windowWidth - 30) * 0.3,
		position: 'absolute',
		marginBottom: 10,
		marginRight: 10,
	},
	threeTexts: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 10,
		width: (windowWidth - 30) * 0.55,
	},
	title: {
		fontFamily: 'OswaldBold',
		fontSize: 22,
		color: colors.lightOrange,
		textAlign: 'right',
		marginVertical: 4,
	},
	paragraph: {
		fontFamily: 'RalewayRegular',
		fontSize: 13,
		marginBottom: 4,
		color: colors.lightGray,
		textAlign: 'right',
	},
});

export default ServiceRight;
