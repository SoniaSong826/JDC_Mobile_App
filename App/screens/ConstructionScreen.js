import React from 'react';
import { Text, StyleSheet, ImageBackground, View, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Menu from '../components/Menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ConstructionScreen({navigation}) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<Image style={styles.picture} source={require('../assets/InsidePagePicture/Constructions.jpg')}></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>CONSTRUCTION YOU CAN {'\n'}COUNT ON</AppText>
			<ScrollView>
				<AppText style={styles.contents}>
					We have more thane than 30 years of experience in residential, commercial properties, air
					conditioning, Carpentry, Stainless Steel, Renovating and Maintenance Services {'\n\n'}
					<AppText style={styles.bold}>Our scope of work includes: </AppText>
					{'\n'}• Residential and non-residential construction {'\n'}• Renovations and extensions {'\n'}•
					Building structure services {'\n'}• Installation services {'\n'}• Heavy and civil engineering {'\n'}
					• Land development {'\n'}• Site preparation
				</AppText>
			</ScrollView>
			<Menu navigation={navigation} atScreen={3}></Menu>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
		backgroundColor: colors.logoGold,
	},
	picture: {
		width: windowWidth,
		height: windowWidth * 0.394,
		position: 'absolute',
	},
	box: {
		marginTop: 115,
	},
	title: {
		fontSize: 30,
		fontFamily: 'OswaldBold',
		color: colors.white,
		paddingHorizontal: 20,
	},
	contents: {
		fontSize: 15,
		fontFamily: 'RalewayRegular',
		color: colors.lightGray,
		padding: 20,
	},
	bold: {
		fontSize: 15,
		fontFamily: 'RalewayBold',
		color: colors.lightGray,
		padding: 20,
	},
});

export default ConstructionScreen;
