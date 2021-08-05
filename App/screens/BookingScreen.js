import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	ImageBackground,
	View,
	Image,
	ScrollView,
	Alert,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { AppForm, AppPicker, SubmitButton, AppFormFieldWithTitle } from '../components/form';
import Menu from '../components/Menu';
import axios from 'axios';
import { Buffer } from 'buffer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookingHistoryModal from '../components/BookingHistoryModal';
import key from '../config/apiKey';

const username = 'api';
const password = key.key;
const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

onClickBooking = (name, date, time, service, office) => {
	const itemBook = {
		name: name,
		date: date,
		time: time,
		service: service,
		office: office,
	};
	AsyncStorage.getItem('bookings')
		.then((bookingResult) => {
			if (bookingResult !== null) {
				const booking = JSON.parse(bookingResult);
				booking.push(itemBook);
				AsyncStorage.setItem('bookings', JSON.stringify(booking));
			} else {
				const booking = [];
				booking.push(itemBook);
				AsyncStorage.setItem('bookings', JSON.stringify(booking));
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

sendMail = (values, date, office, service, time) => {
	const params = new URLSearchParams({
		from: 'info@jdcfacilitiesmanagement.com.au',
		to: 'jdcfacilitiesmanagement823@gmail.com',
		subject: 'Consultation Booking',
		text:
			'Booking from: ' +
			values.firstName +
			' ' +
			values.lastName +
			'\n' +
			'Email: ' +
			values.email +
			'\n' +
			'Mobile Number: ' +
			values.mobileNumber +
			'\n' +
			'Consulting Date: ' +
			date +
			'\n' +
			'Consulting Time: ' +
			time.label +
			'\n' +
			'Visiting Office: ' +
			office.label +
			'\n' +
			'Consultation Service: ' +
			service.label,
	}).toString();
	onClickBooking(values.firstName + ' ' + values.lastName, date, time.label, service.label, office.label);
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
			Alert.alert('Booking Success', 'We have received your booking details. Please arrive on time. Thank you!', [
				{
					text: 'OK',
				},
			]);
		})
		.catch(function (error) {
			console.error(error.response);
		});
};

const validationSchema = Yup.object().shape({
	lastName: Yup.string().required().min(1).label('LastName'),
	firstName: Yup.string().required().min(1).label('FirstName'),
	email: Yup.string().email().required().email().label('Email'),
	mobileNumber: Yup.string().required().max(10).min(10).label('MobileNumber'),
});
const offices = [
	{ label: 'Melbourne Office', value: 1 },
	{ label: 'Sydney Office', value: 2 },
];

const timeSlots = [
	{ label: '9:00 a.m - 10:00 a.m', value: 1 },
	{ label: '10:00 a.m - 11:00 a.m', value: 2 },
	{ label: '11:00 a.m - 12:00 p.m', value: 3 },
	{ label: '12:00 p.m - 1:00 p.m', value: 4 },
	{ label: '1:00 p.m - 2:00 p.m', value: 5 },
	{ label: '2:00 p.m - 3:00 p.m', value: 6 },
	{ label: '3:00 p.m - 4:00 p.m', value: 7 },
	{ label: '4:00 p.m - 5:00 p.m', value: 8 },
];

const servies = [
	{ label: 'Construction', value: 1 },
	{ label: 'Project Management', value: 2 },
	{ label: 'Facility Management', value: 3 },
	{ label: 'Management Consultants', value: 4 },
];
function BookingScreen({ navigation }) {
	const [time, setTime] = useState(timeSlots[0]);
	const [service, setService] = useState(servies[0]);
	const [office, setOffice] = useState(offices[0]);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [date, setDate] = useState('');

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};
	const handleDateConfirm = (date) => {
		let today = new Date();
		const diffTime = date - today;
		const diffDays = diffTime / (1000 * 60 * 60 * 24);

		if (date.getDay() === 6 || date.getDay() === 0) {
			Alert.alert('Date Invalid', 'Please select a workday!', [
				{
					text: 'OK',
					onPress: () => hideDatePicker(),
					style: 'cancel',
				},
			]);
		} else if (diffDays < 0) {
			Alert.alert('Date Invalid', 'Please select future date!', [
				{
					text: 'OK',
					onPress: () => hideDatePicker(),
					style: 'cancel',
				},
			]);
		} else {
			setDate(date.toLocaleDateString());
			hideDatePicker();
		}
	};

	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<Image style={styles.picture} source={require('../assets/SevicePicture/BusinessMeeting.jpg')}></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>BOOKING CONSULTATION</AppText>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
				<AppForm
					style={styles.form}
					initialValues={{
						lastName: '',
						firstName: '',
						email: '',
						mobileNumber: '',
						office: '',
						service: '',
					}}
					onSubmit={(values) => sendMail(values, date, office, service, time)}
					validationSchema={validationSchema}
				>
					<View style={styles.rowContainer}>
						<AppFormFieldWithTitle name="firstName" title="First Name" />
						<AppFormFieldWithTitle name="lastName" title="Last Name" />
					</View>
					<AppFormFieldWithTitle name="mobileNumber" title="Mobile Number" keyboardType="numeric" />
					<AppFormFieldWithTitle name="email" title="Email" />
					<View style={styles.pickerContainer}>
						<AppText style={styles.stateText}>Consulting Date</AppText>
						<TouchableOpacity style={styles.button} onPress={showDatePicker}>
							<AppText style={styles.text}>{date}</AppText>
						</TouchableOpacity>
					</View>
					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode="date"
						onConfirm={handleDateConfirm}
						onCancel={hideDatePicker}
					/>

					<View style={styles.pickerContainer}>
						<AppText style={styles.stateText}>Consulting Time</AppText>
						<AppPicker
							items={timeSlots}
							name="state"
							placeholder="Select"
							selectedItem={time}
							onSelectItem={(item) => setTime(item)}
						/>
					</View>
					<View style={styles.rowContainer}>
						<View style={styles.pickerContainer}>
							<AppText style={styles.stateText}>Office Visiting</AppText>
							<AppPicker
								items={offices}
								name="office"
								placeholder="Select"
								selectedItem={office}
								onSelectItem={(item) => setOffice(item)}
							/>
						</View>
						<View style={styles.pickerContainer}>
							<AppText style={styles.stateText}>Consulting Service</AppText>
							<AppPicker
								items={servies}
								name="service"
								selectedItem={service}
								onSelectItem={(item) => setService(item)}
							/>
						</View>
					</View>
					<SubmitButton title="BOOK NOW" />
				</AppForm>
			</ScrollView>
			<Menu navigation={navigation} atScreen={2}></Menu>
			<BookingHistoryModal navigation={navigation}></BookingHistoryModal>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
	container: {
		width: '100%',
		padding: 10,
		marginTop: 5,
	},

	rowContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	pickerContainer: {
		flex: 1,
		alignItems: 'flex-start',
		marginTop: 10,
		marginHorizontal: 10,
	},
	stateText: {
		color: colors.white,
		fontSize: 15,
		fontFamily: 'RalewayRegular',
	},
	picture: {
		width: windowWidth,
		height: windowWidth * 0.394,
		position: 'absolute',
	},
	box: {
		marginTop: windowWidth * 0.394 - 50,
	},
	title: {
		fontSize: 30,
		fontFamily: 'OswaldBold',
		color: colors.white,
		paddingHorizontal: 20,
	},
	text: {
		backgroundColor: colors.darkBlue,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 7,
		marginTop: 8,
		fontFamily: 'RalewayRegular',
		padding: 10,
		fontSize: 15,
		width: windowWidth - 40,
	},
});
export default BookingScreen;
