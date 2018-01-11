/**
 * Created by Deepak on 10/01/2018.
 * Component to authenticate the user by sending a code to his/her mobile number
 * This component inputs the Mobile number of user.  
 */

import React, { Component } from 'react';
import {
	View,
	TextInput
} from 'react-native';
import InfoView from './InfoView';
import Input from './Input';
import FloatingButton from './FloatingButton';

class EnterMobileNumber extends Component {

	state = {
		number: '',
	};

	/**
	 * function to be called when click on button to send the verification code.
	 */
	onButtonPress(){
		const { number } = this.state;
		if (number === '' || number.length<10) {
			alert('Please enter your 10 digit mobile number');
		} else {
			// number is valid, send the verification code
			alert(number);
			this.props.navigation.navigate('EnterPasscode');
		}  
	}

	render() {
		const {
			container
		} = styles;
		return (
			<View style={container}>
				<InfoView 
					title={'Enter 10 Digit Mobile Number'}
					subTitle={'We will send you a Verification Passcode'}
				/>

				<Input
					inputType={'numeric'}
					onChangeText={(number) => this.setState({ number })}
					hint={'•  •  •  •  •  •  •  •  •  •'}
					value={this.state.number}
					secureTextEntry={false}
					maxLength={10}
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

export default EnterMobileNumber;
