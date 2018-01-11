/**
 * Created by Deepak on 10/01/2018.
 * Component to display the title and subtitle on Screen   
 */

import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

const InfoView = (props) => {

	const { titleStyle, subTitleStyle } = styles;
	
	return (
		<View>
			<Text style={titleStyle}>{props.title}</Text>
			<Text style={subTitleStyle}>{props.subTitle}</Text>
		</View>
	);
};

InfoView.propTypes = {
    title: PropTypes.string,
    subTitle:PropTypes.string,
};

const styles = {
	titleStyle: {
		color: '#000',
		fontSize: 18,
		marginTop: 20,
	},
	subTitleStyle: {
		color: '#A9A9A9',
		fontSize: 14,
	},
};

export default InfoView;
