import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Button, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import Modal from 'react-native-modal';
import MenuItem from './MenuItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const menu = [
	{ id: 1, title: 'HOME', textColor: 'lightGray', color: 'darkGray' },
	{ id: 2, title: 'BOOKING', textColor: 'middleOrange', color: 'black' },
	{ id: 3, title: 'CONSTRUCTION', textColor: 'lightOrange', color: 'black' },
	{ id: 4, title: 'PROJECT MANAGEMENT', textColor: 'lightOrange', color: 'black' },
	{ id: 5, title: 'FACILITY MANAGEMENT', textColor: 'lightOrange', color: 'black' },
	{ id: 6, title: 'MANAGEMENT CONSULTANTS', textColor: 'lightOrange', color: 'black' },
	{ id: 7, title: 'CONTACT US', textColor: 'lightBlue', color: 'black' },
	{ id: 8, title: 'ABOUT US', textColor: 'lightBlue', color: 'black' },
	{ id: 9, title: 'CAREER', textColor: 'lightBlue', color: 'black' },
];

function LocationModal({ atScreen, navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState(atScreen);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.upButton}>
					<MaterialCommunityIcons name="menu" size={30} color={colors.darkBlue} />
				</View>
			</TouchableWithoutFeedback>
			<Modal
				isVisible={modalVisible}
				onBackdropPress={() => setModalVisible(false)}
				onSwipeComplete={() => setModalVisible(false)}
				statusBarTranslucent={true}
				animationIn="slideInLeft"
				animationOut="slideOutLeft"
				style={styles.half}
				backdropOpacity={0.3}
			>
				<View style={styles.menu}>
					<Image source={require('../assets/icon_with_title.png')} style={styles.logo}></Image>
					<View>
						<FlatList
							contentContainerStyle={styles.flatlist}
							data={menu}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<MenuItem
									title={item.title}
									key={item.id}
									color={selectedItem === item.id ? 'darkGray' : 'black'}
									textColor={item.textColor}
									onPress={() => {
										setModalVisible(false);
										navigation.navigate(item.title);
									}}
								/>
							)}
						></FlatList>
					</View>
				</View>
			</Modal>
		</React.Fragment>
	);
}
const styles = StyleSheet.create({
	upButton: {
		position: 'absolute',
		left: 20,
		bottom: 20,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: colors.lightOrange,
	},
	half: {
		backgroundColor: colors.black,
		margin: 0,
		width: windowWidth * 0.5,
	},
	menu: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	logo: {
		width: windowWidth * 0.45,
		height: windowWidth * 0.45,
		paddingBottom: 10,
	},
	flatlist: {
		borderTopColor: colors.middleGray,
		borderTopWidth: 1,
	},
});
export default LocationModal;