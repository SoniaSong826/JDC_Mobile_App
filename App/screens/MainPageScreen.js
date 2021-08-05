import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import PostSlides from '../components/PostSlider';
import ServiceLeft from '../components/ServiceLeft';
import ServiceRight from '../components/ServiceRight';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LocationModal from '../components/LocationModal';
import Menu from '../components/Menu';
import AppButton from '../components/AppButton';
const windowWidth = Dimensions.get('window').width;
function MainPageScreen({ navigation }) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<PostSlides></PostSlides>

			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
				<AppText style={styles.title}>OUR SERVICES</AppText>
				<AppText style={styles.subtitle}>
					Don’t get framed by the competition, trust our solid reputation.
				</AppText>
				<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BOOKING')}>
					<MaterialCommunityIcons name="hand-pointing-right" size={30} color={colors.white} />
					<AppText style={styles.buttonText}>BOOK CONSULTATION</AppText>
				</TouchableOpacity>

				<ServiceLeft
					navigation={navigation}
					title="CONSTRUCTION"
					paragraph="Masters of Consistency & Quality."
					image={require('../assets/SevicePicture/construction-site-silhouettes-min.jpg')}
					toScreen="CONSTRUCTION"
				></ServiceLeft>
				<ServiceRight
					navigation={navigation}
					title="PROJECT MANAGEMENT"
					paragraph="From complete turn key to project manager. Leave the building to the professionals."
					image={require('../assets/SevicePicture/medium-shot-side-view-construction-engineer-using-tablet-min.jpg')}
					toScreen="PROJECT MANAGEMENT"
				></ServiceRight>
				<ServiceLeft
					navigation={navigation}
					title="FACILITY MANAGEMENT"
					paragraph="Inculcating your life with disaster management is better than replacing your life."
					image={require('../assets/SevicePicture/male-worker-factory-min.jpg')}
					toScreen="FACILITY MANAGEMENT"
				></ServiceLeft>
				<ServiceRight
					navigation={navigation}
					title="MANAGEMENT CONSULTANTS"
					paragraph="Setting the standard in real estate management."
					image={require('../assets/SevicePicture/handsome-business-man-engineer-hard-hat-building-min.jpg')}
					toScreen="MANAGEMENT CONSULTANTS"
				></ServiceRight>
			</ScrollView>
			<Menu navigation={navigation} atScreen={1}></Menu>
			<LocationModal navigation={navigation}></LocationModal>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
	title: {
		fontSize: 23,
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 5,
	},
	subtitle: {
		fontFamily: 'RalewayRegular',
		fontSize: 13,
		color: colors.lightGray,
		textAlign: 'center',
		marginBottom: 10,
	},
	buttonText: {
		fontSize: 23,
		textAlign: 'center',
		paddingVertical: 5,
		paddingLeft: 5,
		fontFamily: 'OswaldBold',
	},
	button: {
		backgroundColor: colors.middleOrange,
		width: 270,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom:10,
	},
});

export default MainPageScreen;
