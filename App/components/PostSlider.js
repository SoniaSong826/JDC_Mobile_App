import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { SliderBox } from 'react-native-image-slider-box';

const windowWidth = Dimensions.get('window').width;

export default class PostSlides extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				require('../assets/postSliders/SlidePicture1.jpg'),
				require('../assets/postSliders/SlidePicture2.jpg'),
				require('../assets/postSliders/SlidePicture3.jpg'),
				require('../assets/postSliders/SlidePicture4.jpg'),
			],
		};
	}

	render() {
		return (
			<SliderBox
				images={this.state.images}
				ImageComponentStyle={{ width: windowWidth }}
				resizeMethod={'scale'} //"auto","resize","scale"
				resizeMode={'cover'} //"cover","contain","stretch","repeat","center"
				imageLoadingColor={colors.lightOrange}
				dotColor={colors.lightOrange}
				inactiveDotColor={colors.lightGray}
				autoplay
				circleLoop
				// onCurrentImagePressed={() => this.props.navigation.navigate('Categories')}
			/>
		);
	}
}

const styles = StyleSheet.create({});
