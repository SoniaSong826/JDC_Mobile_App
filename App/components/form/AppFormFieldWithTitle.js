import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import colors from "../../config/colors";
import AppFormField from "./AppFormField";

function AppFormFieldWithTitle({ style, title, name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          {...otherProps}
        ></AppTextInput>
        <ErrorMessage
          error={errors[name]}
          visible={touched[name]}
        ></ErrorMessage>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		marginHorizontal: 10,
		marginTop: 10,
	},
	text: {
		color: colors.white,
		fontSize: 15,
		fontFamily: 'RalewayRegular',
	},
});
export default AppFormFieldWithTitle;
