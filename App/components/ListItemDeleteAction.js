import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteZone}>
        <MaterialCommunityIcons
          name="trash-can"
          size={40}
          color={colors.white}
        ></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  deleteZone: {
    marginVertical:5,
    width: 70,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: colors.danger,
  },
});
export default ListItemDeleteAction;
