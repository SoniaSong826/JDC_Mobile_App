import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import * as Yup from 'yup';
import colors from '../config/colors';
import { AppForm, AppPicker, SubmitButton, AppFormFieldWithTitle } from '../components/form';
import { ScrollView } from 'react-native-gesture-handler';
import email from 'react-native-email';
import AppText from '../components/AppText';
import Menu from '../components/Menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(1).label('Name'),
	email: Yup.string().required().email().label('Email'),
	subject: Yup.string().required().label('Password'),
	message: Yup.string().required().label('Message'),
	number: Yup.string().required().length(10).label('Phone Number'),
});

function ContactUsScreen({navigation}) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.jpg')}>
			<Image style={styles.picture} source={require('../assets/InsidePagePicture/ContactUs.jpg')}></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>CONTACT US</AppText>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
				<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
					<AppForm
						style={styles.form}
						initialValues={{
							name: '',
							email: '',
							subject: '',
							message: '',
							number: '',
						}}
						onSubmit={(values) => {
							const to = 'info@jdcfacilitiesmanagement.com.au';
							email(to, {
								subject: values.subject,
								body: values.message + '\n' + 'Mobile Number: ' + values.number + '\n' + values.name,
							}).catch(console.error);
						}}
						validationSchema={validationSchema}
					>
						<AppFormFieldWithTitle name="name" title="Name" />
						<AppFormFieldWithTitle name="email" title="Email" />
						<AppFormFieldWithTitle name="subject" title="Subject" />
						<AppFormFieldWithTitle name="message" title="Message" multiline />
						<AppFormFieldWithTitle name="number" title="Phone Number" keyboardType="numeric" />
						<SubmitButton title="SUBMIT" />
					</AppForm>
				</ScrollView>
			</KeyboardAvoidingView>
			<Menu navigation={navigation} atScreen={7}></Menu>
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
});
export default ContactUsScreen;
