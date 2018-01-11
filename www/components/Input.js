/**
 * Created by Deepak on 09/11/2017.
 * a common component for the user input
 */

import React from 'react';
import {
	TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const Input = (props) => {

	const { 
		inputType, 
		onChangeText, 
		hint, 
		value, 
		secureTextEntry,
		maxLength, 
	} = props;

	const { textInputStyle } = styles;

	return (
			<TextInput
				style={textInputStyle}
				keyboardType={inputType || 'default'}
				onChangeText={onChangeText}
				placeholder={hint}
				value={value}
				secureTextEntry={secureTextEntry}
				placeholderTextColor={'#A9A9A9'}
				underlineColorAndroid='transparent'
				maxLength={maxLength}
			/>
	);
};

Input.propTypes = {
    inputType: PropTypes.string, 
	onChangeText: PropTypes.func, 
	hint: PropTypes.string, 
	value: PropTypes.string, 
	secureTextEntry: PropTypes.boolean,
	maxLength: PropTypes.number,
};

const styles = {
	textInputStyle: {
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 16,
		color: '#000',
		backgroundColor: 'transparent',
		borderRadius: 5,
		margin: 5,
	},
};

export default Input;
