import React, { Component, useState } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, FlatList, Dimensions, Modal, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HistoryItem from './HistoryItem';
import AppText from './AppText';
import ListItemSeparator from '../components/ListItemSeparator';
import axios from 'axios';
import { Buffer } from 'buffer';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class BookingHistoryModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookings: [],
			modalVisible: false,
			username: 'api',
			password: 'key-6ea6e6262f729200f0510e1ba46c155f',
		};
	}

	sendCancelMail = (name, date, time, service, office) => {
		const token = Buffer.from(`${this.state.username}:${this.state.password}`, 'utf8').toString('base64');
		const params = new URLSearchParams({
			from: 'info@jdcfacilitiesmanagement.com.au',
			to: 'jdcfacilitiesmanagement823@gmail.com',
			subject: 'Consultation Cancelled',
			text:
				'Cancel Booking from: ' +
				name +
				'\n' +
				'Consulting Date: ' +
				date +
				'\n' +
				'Consulting Time: ' +
				time +
				'\n' +
				'Visiting Office: ' +
				office +
				'\n' +
				'Consultation Service: ' +
				service,
		}).toString();
		axios
			.post(
				'https://api.mailgun.net/v3/sandbox20d5a4863cf747b3be73cddeaaa3c9fc.mailgun.org/messages?' + params,
				{},
				{
					headers: {
						Authorization: `Basic ${token}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then(function (response) {
				Alert.alert(
					'Cancel Success',
					'We have received your cancellation request. You can book another time. Thank you!',
					[
						{
							text: 'OK',
						},
					]
				);
				this.setState({ modalVisible: false });
			})
			.catch(function (error) {
				console.warn(error);
			});
	};

	componentDidMount() {
		AsyncStorage.getItem('bookings')
			.then((booking) => {
				const bookingHistory = JSON.parse(booking);
				const historyToShow = [];
				for (let i in bookingHistory) {
					let today = new Date();

					const diffTime = Date.parse(bookingHistory[i].date) - today;
					if (diffTime > 0) {
						historyToShow.push(bookingHistory[i]);
					}
				}
				this.setState({ bookings: historyToShow });
			})
			.catch((err) => {
				alert(err);
			});
	}

	handleDelete = (i) => {
		const bookingHistory = this.state.bookings;
		bookingHistory.splice(i, 1);
		this.setState({ bookings: bookingHistory });
		AsyncStorage.removeItem('bookings');
		AsyncStorage.setItem('bookings', JSON.stringify(bookingHistory));

		AsyncStorage.getItem('bookings').then((cart) => {
			const cartfood = JSON.parse(cart);
			this.setState({ bookings: cartfood });
		});
	};

	render() {
		const { navigation } = this.props;
		return (
			<React.Fragment>
				<TouchableWithoutFeedback
					onPress={() => {
						this.setState({ modalVisible: true });
						this.componentDidMount();
					}}
				>
					<View style={styles.upButton}>
						<MaterialCommunityIcons name="history" size={30} color={colors.darkBlue} />
					</View>
				</TouchableWithoutFeedback>
				<Modal
					visible={this.state.modalVisible}
					
					transparent={true}
					animationType="slide"
				>
					<View style={styles.safeArea}>
						<TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })}>
							<View style={styles.downButton}>
								<AppText style={styles.title}>BOOKING HISTORY</AppText>
								<MaterialCommunityIcons
									name="chevron-down"
									size={30}
									color={colors.middleGray}
								></MaterialCommunityIcons>
							</View>
						</TouchableWithoutFeedback>
						{this.state.bookings === null || this.state.bookings.length == 0 ? (
							<AppText style={styles.empty}>No Future Booking</AppText>
						) : (
							<FlatList
								data={this.state.bookings}
								keyExtractor={(item) => `${item}`}
								ItemSeparatorComponent={() => <ListItemSeparator />}
								renderItem={({ item }, i) => (
									<HistoryItem
										name={item.name}
										date={item.date}
										time={item.time}
										service={item.service}
										office={item.office}
										onDelete={() => {
											Alert.alert('Warning', 'Are you sure you want to cancel this booking?', [
												{
													text: 'Cancel',
													style: 'cancel',
												},
												{
													text: 'OK',
													onPress: () => {
														this.handleDelete(i);
														this.sendCancelMail(
															item.name,
															item.date,
															item.time,
															item.service,
															item.office
														);
													},
												},
											]);
										}}
									></HistoryItem>
								)}
							></FlatList>
						)}
					</View>
				</Modal>
			</React.Fragment>
		);
	}
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
	safeArea: {
		height: height * 0.4,
		backgroundColor: colors.black,
		alignItems: 'center',
		marginTop: 'auto',
	},
	downButton: {
		flexDirection: 'row',
		paddingTop: 10,
		paddingRight: 15,
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		width: width,
	},
	empty: {
		color: colors.middleGray,
		fontSize: 15,
		marginTop:10,
		fontFamily: 'RalewayMedium',
	},
	title: {
		color: colors.lightGray,
		fontSize: 20,
		marginLeft:20,
	},
});
