import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ style,icon, height, ...otherProps }) {
  return (
    <View style={[styles.container,{height:height},style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.lightGray}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.text} {...otherProps}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkBlue,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 7,
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 8,
		padding: 10,
		width: '100%',
	},
	icon: {
		marginHorizontal: 10,
	},
	text: {
		flex: 1,
		fontSize: 14,
		fontFamily: 'RalewayRegular',
		color: colors.white,
	},
});
export default AppTextInput;
