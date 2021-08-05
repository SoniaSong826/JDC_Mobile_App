import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Platform, Modal, Button, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import AppButton from './AppButton';
import call from 'react-native-phone-call';
import email from 'react-native-email';
function LocationModal({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.upButton}>
					<MaterialCommunityIcons name="account-tie" size={30} color={colors.darkBlue} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} transparent={true} animationType="slide">
				<View style={styles.safeArea}>
					<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
						<View style={styles.downButton}>
							<MaterialCommunityIcons
								name="chevron-down"
								size={30}
								color={colors.lightGray}
							></MaterialCommunityIcons>
						</View>
					</TouchableWithoutFeedback>

					<AppText style={styles.city}>MELBOURNE</AppText>
					<AppText style={styles.location}>36 - 38 Leveson St, North Melbourne, VIC 3051</AppText>
					<AppText style={styles.city}>SYDNEY</AppText>
					<AppText style={styles.location}>Suite 3 - 6/17 Brunmby St, Seven Hills, NSW 2147</AppText>
					<AppText style={styles.location}>Tel: (03) 9329 4016{'\n'}Mobile: 0438 687 808</AppText>
					<View style={styles.rowView}>
						<TouchableWithoutFeedback
							onPress={() =>
								Linking.openURL(
									'https://www.facebook.com/JDC-Facilities-Management-Pty-Ltd-112755261054202'
								)
							}
						>
							<MaterialCommunityIcons name="facebook" size={40} color={colors.lightGray} />
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.navigate('CONTACT US');
								setModalVisible(false);
							}}
						>
							<View style={styles.logo}>
								<MaterialCommunityIcons name="face-agent" size={28} color={colors.black} />
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={() => call({ number: '0438687808', prompt: false }).catch(console.error)}
						>
							<View style={styles.logo}>
								<MaterialCommunityIcons name="cellphone" size={28} color={colors.black} />
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={() => call({ number: '0393294016', prompt: false }).catch(console.error)}
						>
							<View style={styles.logo}>
								<MaterialCommunityIcons name="phone" size={28} color={colors.black} />
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</Modal>
		</React.Fragment>
	);
}
const styles = StyleSheet.create({
	upButton: {
		position: 'absolute',
		right: 20,
		bottom: 20,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: colors.lightGray,
	},
	city: {
		fontFamily: 'OswaldBold',
		fontSize: 22,
		color: colors.lightGray,
	},
	location: {
		fontFamily: 'RalewayRegular',
		fontSize: 13,
		marginBottom: 20,
		color: colors.lightGray,
	},
	safeArea: {
		paddingLeft: 20,
		marginTop: 'auto',
		backgroundColor: colors.black,
	},
	downButton: {
		paddingTop: 10,
		paddingRight: 15,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
	},
	contactButton: {
		color: colors.lightOrange,
	},
	logo: {
		backgroundColor: colors.lightOrange,
		width: 35,
		height: 35,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
	},
});
export default LocationModal;
