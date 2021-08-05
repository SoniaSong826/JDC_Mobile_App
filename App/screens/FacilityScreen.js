import React from 'react';
import { Text, StyleSheet, ImageBackground, View, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Menu from '../components/Menu';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function FacilityScreen({ navigation }) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<Image
				style={styles.picture}
				source={require('../assets/InsidePagePicture/FacilityManagement.jpg')}
			></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>FACILITY MANAGEMENT WITH{'\n'}TRUST</AppText>
			<ScrollView>
				<AppText style={styles.contents}>
					Our Facilities / Operations Managers are responsible for the strategic oversight of the building
					operations.{'\n\n'}
					<AppText style={styles.bold}>Our scope of work includes: </AppText>
					{'\n'}• Academically Qualified Engineers {'\n'}• Defect Management {'\n'}• Contract Management{' '}
					{'\n'}• Tender Management {'\n'}• Asset Management {'\n'}• ESM Compliance Auditing {'\n'}• Project
					Management {'\n'}• Opex & Capex Maintenance Budgeting {'\n'}• Cross Site Experiences
				</AppText>
			</ScrollView>
			<Menu navigation={navigation} atScreen={5}></Menu>
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

export default FacilityScreen;
