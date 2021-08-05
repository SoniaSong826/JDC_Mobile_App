import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Image, View, KeyboardAvoidingView, Dimensions } from 'react-native';
import * as Yup from 'yup';
import { AppForm, SubmitButton, AppFormFieldWithTitle, ErrorMessage } from '../components/form';
import email from 'react-native-email';
import AppText from '../components/AppText';
import AppPicker from '../components/form/AppPicker';
import RNFileSelector from 'react-native-file-selector';
import colors from '../config/colors';
import Menu from '../components/Menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//If extensions is empty or null or undefined then FilePicker doesn't apply any filtering
const extensions = ['.png', '.jpg', '.jpeg', '.doc', '.docx', '.xls', 'xlsx', '.pdf'];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.string().required().label("Mobile"),
  country: Yup.string().required().label("Country"),
  position: Yup.string().required().label("Position"),
});
// const positions = [
// 	{ label: 'Chefs', value: 1 },
// 	{ label: 'Cooks', value: 2 },
// 	{ label: 'Pastry Cooks', value: 3 },
// 	{ label: 'Bakers', value: 4 },
// 	{ label: 'Trainee', value: 5 },
// 	{ label: 'Apprentices', value: 6 },
// 	{ label: 'Kitchen Assistants', value: 7 },
// 	{ label: 'Helpers', value: 8 },
// ];

function CareerScreen({ navigation }) {
	return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.picture}
        source={require("../assets/InsidePagePicture/Career.jpg")}
      ></Image>
      <View style={styles.box}></View>
      <AppText style={styles.title}>CAREER</AppText>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={styles.container}
        >
          <AppText style={styles.contents}>
            Want to join the winning team, please complete the form, attach your
            resume and send it to us.
          </AppText>
          <AppForm
            style={styles.form}
            initialValues={{
              name: "",
              email: "",
              mobile: "",
              country: "",
              position: "",
            }}
            onSubmit={(values) => {
              const to = "support@jdcfacilitiesmanagement.com.au";
              email(to, {
                subject: "Career Application",
                body:
                  values +
                  "\n" +
                  "Mobile Number: " +
                  values.number +
                  "\n" +
                  "Country:" +
                  values.country +
                  "\n" +
                  "Position:" +
                  values.position +
                  "\n" +
                  values.name,
              }).catch(console.error);
            }}
            validationSchema={validationSchema}
          >
            <AppFormFieldWithTitle name="name" title="Name" />
            <AppFormFieldWithTitle name="email" title="Email" />
            <AppFormFieldWithTitle
              name="mobile"
              title="Mobile "
              keyboardType="numeric"
            />
            <AppFormFieldWithTitle name="country" title="Country" />
            <AppFormFieldWithTitle name="position" title="Position" />
            <SubmitButton title="Submit" />
          </AppForm>
        </ScrollView>
      </KeyboardAvoidingView>
      <Menu navigation={navigation} atScreen={9}></Menu>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    width: "100%",
    padding: 10,
  },
  picture: {
    width: windowWidth,
    height: windowWidth * 0.394,
    position: "absolute",
  },
  box: {
    marginTop: 115,
  },
  title: {
    fontSize: 30,
    fontFamily: "OswaldBold",
    color: colors.white,
    paddingHorizontal: 20,
  },
  contents: {
    fontSize: 15,
    fontFamily: "RalewayRegular",
    color: colors.lightGray,
	padding:10,
	textAlign:"justify",
  },
});
export default CareerScreen;
