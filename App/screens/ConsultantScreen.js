import React from 'react';
import { Text, StyleSheet, ImageBackground, View, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Menu from '../components/Menu';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ConsultantScreen({ navigation }) {
	return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.picture}
        source={require("../assets/InsidePagePicture/ManagementConsultants.jpg")}
      ></Image>
      <View style={styles.box}></View>
      <AppText style={styles.title}>
        TRUST IN OUR EXPERIENCED {"\n"}MANAGEMENT CONSULTANTS
      </AppText>
      <ScrollView>
        <AppText style={styles.contents}>
          We transform and manage the change process while sustaining the new
          ways of working through a series of elements some or all of which are
          used in specific projects. Our consultants can help you make the right
          decisions by employing several different tactics including: 
          {"\n\n"}• Change management planning {"\n"}• Facilitating workshops{" "}
          {"\n"}• ICT benchmarking {"\n"}• ICT workforce planning {"\n"}•
          Planning and process evaluation
          {"\n"}• Procurement advice {"\n"}• Vendor engagement negotiation
        </AppText>
      </ScrollView>
      <Menu navigation={navigation} atScreen={6}></Menu>
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

export default ConsultantScreen;
