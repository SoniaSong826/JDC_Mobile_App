import React from 'react';
import { Text, StyleSheet, ImageBackground, View, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Menu from '../components/Menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function PMScreen({navigation}) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<Image style={styles.picture} source={require('../assets/InsidePagePicture/ProjectManagement.jpg')}></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>PROJECT MANAGEMENT{'\n'}WITH EXPERTS</AppText>
			<ScrollView>
				<AppText style={styles.contents}>
					Our services are based on our 30 years of experience and in-depth principles of client-focus,
					responsiveness, thinking ahead and delivering project value at every stage. {'\n\n'}Understanding
					your objectives enables us to focus on specific deliverables, while ensuring our risk management,
					planning, programming and budget management experience delivers on all stages of your project.
					{'\n\n'}
					<AppText style={styles.bold}>Our Services: </AppText>
					{'\n'}• Project Management Templates {'\n'}• Project Audits {'\n'}• Project Coordination {'\n'}•
					Project Scheduling {'\n'}• Project Governance  {'\n'}• Project Methodologies {'\n'}• Project
					Frameworks {'\n'}• Project Management Training
				</AppText>
			</ScrollView>
			<Menu navigation={navigation} atScreen={4}></Menu>
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

export default PMScreen;
