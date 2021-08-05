import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Menu from "../components/Menu";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function AboutUsScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.picture}
        source={require("../assets/InsidePagePicture/AboutUs.jpg")}
      ></Image>
      <View style={styles.box}></View>
      <AppText style={styles.title}>ABOUT US</AppText>
      <ScrollView>
        <AppText style={styles.contents}>
          We have more than 30 years of experience as a firm committed to
          providing innovative and cost-effective design solutions. {"\n\n"}We
          can help you move your business forward with our professional
          services. Everything from business consulting to helping you with
          strategies and priorities, software development, cloud adoption,
          infrastructure design and installation. We can help you reduce your
          business risk by managing your entities on your behalf.
        </AppText>
      </ScrollView>
      <Menu navigation={navigation} atScreen={8}></Menu>
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
    padding: 20,
  },
  bold: {
    fontSize: 15,
    fontFamily: "RalewayBold",
    color: colors.lightGray,
    padding: 20,
  },
});

export default AboutUsScreen;
