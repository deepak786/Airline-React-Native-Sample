/**
 * Created by Deepak on 10/01/2018.
 * Component to verify the verification code.
 * This component inputs the verification code.  
 */

import React, { Component } from 'react';
import {
	View,
	TextInput
} from 'react-native';
import InfoView from './InfoView';
import Input from './Input';
import FloatingButton from './FloatingButton';

class EnterPasscode extends Component {

	state = {
		code: '',
	};

	/**
	 * function to be called when click on button to verify the verification code.
	 */
	onButtonPress(){
		const { code } = this.state;
		if (code === '') {
			alert('Please enter your code');
		} else {
			alert(code);
		}  
	}

	render() {
		const {
			container
		} = styles;
		return (
			<View style={container}>
				<InfoView 
					title={'Enter Passcode'}
					subTitle={'Please enter the code'}
				/>

				<Input
					inputType={'numeric'}
					onChangeText={(code) => this.setState({ code })}
					hint={'•  •  •  •  •  •'}
					value={this.state.code}
					secureTextEntry={false}
					maxLength={6}
				/>

				<FloatingButton 
					onPress={this.onButtonPress.bind(this)}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 15,
	},
};

export default EnterPasscode;
