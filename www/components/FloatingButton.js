/**
 * Created by Deepak on 10/01/2018.
 * Component to add a Floating button to the bottom-right corner of the screen   
 */

import React from 'react';
import {
	View,
	TouchableOpacity,
	Image,
} from 'react-native';
import Images from '../res/Images';
import PropTypes from 'prop-types';

const FloatingButton = (props) => {

	const {
		containerStyle,
	} = styles;

	return(
		<TouchableOpacity 
			style={containerStyle}
			onPress={props.onPress}
		>
			<Image
				source={Images.arrow}
			/>
		</TouchableOpacity>
	);
};

FloatingButton.propTypes = {
    onPress: PropTypes.func,
};

const styles = {
	containerStyle: {
		position: 'absolute',
		borderRadius: 40,
		padding: 5,
		backgroundColor: '#0071BF',
		right: 20,
		bottom: 20,
	},
};

export default FloatingButton;
