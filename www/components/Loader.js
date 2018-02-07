import React from 'react';
import {
	View,
	ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';

const Loader = (props) => {

	const { containerStyle, loaderStyle} = styles;
	if (props.showLoader) {
		return (
			<View style={containerStyle}>
				<ActivityIndicator 
					size='large'
					color='#65CEC6'
					style={loaderStyle}
				/>
			</View>
		);
	}
	return ( null );

};

Loader.propTypes = {
    showLoader: PropTypes.bool,
};

const styles = {
	containerStyle: {
		position: 'absolute',
		backgroundColor: '#000000',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		opacity: 0.6,
	},
	loaderStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	}
};

export default Loader;