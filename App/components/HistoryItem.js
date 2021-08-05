import React from 'react';
import { View, StyleSheet, Image, Dimensions, renderRightAction, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import ListItemDeleteAction from './ListItemDeleteAction';
import AppText from './AppText';
import AppButton from './AppButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HistoryItem({ name, date, time, service, office, onPress, onDelete }) {
	return (
		<View style={styles.card} onPress={onPress}>
			<View style={styles.rowView}>
				<AppText style={styles.title}>{name}</AppText>
				<AppButton textStyle={styles.delete} title={'Cancel Booking'} onPress={onDelete}></AppButton>
			</View>
			<AppText style={styles.title}>Consulting Date: {date}</AppText>
			<AppText style={styles.title}>Consulting Time: {time}</AppText>
			<AppText style={styles.title}>Consulting Service: {service}</AppText>
			<AppText style={styles.title}>Visiting Office: {office}</AppText>
		</View>
	);
}
const styles = StyleSheet.create({
	card: {
		width: windowWidth - 20,
		backgroundColor: colors.black,
		marginVertical: 5,
		paddingHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingVertical: 8,
		shadowOffset: { width: 1, height: 1 },
	},
	title: {
		color: colors.lightGray,
		fontFamily: 'RalewayMedium',
		fontSize: 16,
		marginBottom: 3,
	},
	delete: {
		color: colors.danger,
		fontFamily: 'RalewayMedium',
		fontSize: 16,
		marginBottom: 3,
	},
	rowView: {
		flex: 1,
		width: windowWidth - 20,
		paddingRight: 12,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
});

export default HistoryItem;
