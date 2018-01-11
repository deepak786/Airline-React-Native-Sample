/**
 * Created by Deepak on 02/01/2018.
 * This component is for the list item of CheckInList
 */

import React from 'react';
import {
	TouchableOpacity,
	Image, 
	Text,
	Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const equalWidth = ((width - 20) / 3); 

const CheckInItem = (props) => {

	const { item, onPress } = props;
	const { container, imageStyle, textStyle } = styles;

	return (
		<TouchableOpacity 
			style={container}
			onPress={() => onPress(item)}
		>
			{<Image
				style={imageStyle}
				source={item.image} 
			/>}

			<Text style={textStyle}>{item.title}</Text>
		</TouchableOpacity>
	);
};

CheckInItem.propTypes = {
    item: PropTypes.object.isRequired,
    onPress: PropTypes.func,
};

const styles = {
	container: {
		width: equalWidth,
		alignItems: 'center',
		marginBottom: 25,
	},
	imageStyle: {
		width: 60,
		height: 60,
		borderRadius: 10,
		marginBottom: 10,
	},
	textStyle: {
		fontSize: 14,
		color: '#000',
		textAlign: 'center',
	}
};

export default CheckInItem;
