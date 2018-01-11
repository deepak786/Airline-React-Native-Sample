/**
 * Created by Deepak on 22/12/2017.
 * Home screen of the application.
 * User can login with Facebook, Google and Twitter,  
 */

import React, { Component } from 'react';
import {
	View,
	Image,
	ImageBackground,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import Images from '../res/Images';
import Keys from '../res/Keys';

class Home extends Component {

	componentWillMount() {
		
	}

	/**
	 * function to be called when user click on Facebook icon
	 * This function retrieve the user info from Facebook
	 * After Successfull retrieval, user is autheticated with Firebase
	 */
	async fbLogin() {
		// this.props.navigation.navigate('EnterMobileNumber');
		const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(Keys.FB_APP_ID, {
			permissions: ['public_profile', 'email', 'user_friends'],
		});
		if (type === 'success') {
			const credential = firebase.auth.FacebookAuthProvider.credential(token);
			// Sign in with credential from the Facebook user.
			firebase.auth().signInWithCredential(credential)
				.then(this.onLoginSuccess.bind(this))
				.catch(this.onLoginError.bind(this));
		}
	}

	/**
	 * function to be called when user click on Google icon
	 * This function retrieve the user info from Google
	 * After Successfull retrieval, user is autheticated with Firebase
	 */
	googleLogin() {

	}

	/**
	 * callback function when user is successfully authenticated with Firebase
	 */
	onLoginSuccess = (result) => {
		const arrayToSave = [
			['id', result.uid],
			['name', result.displayName],
		];
		AsyncStorage.multiSet(arrayToSave, err => {
			if (err == null) {
				// go to dashboard
				const resetAction = NavigationActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'Dashboard' })
					]
				});
				this.props.navigation.dispatch(resetAction);
			} else {
				alert(err);
			}
		});
	}

	/**
	 * callback function when there is error in authetication with Firebase
	 */
	onLoginError = (error) => {
		alert(error.message);
	}

	render() {
		const {
			backgroundImage,
			image,
			socialLoginView,
			socialLoginImage
		} = styles;
		return (
			<ImageBackground source={Images.background} style={backgroundImage}>
				<Image source={Images.moscatext} style={image} />

				<View style={socialLoginView}>
					<TouchableOpacity onPress={this.fbLogin.bind(this)}>
						<Image source={Images.facebook} style={socialLoginImage} />
					</TouchableOpacity>

					<TouchableOpacity onPress={this.googleLogin.bind(this)}>
						<Image source={Images.google} style={socialLoginImage} />
					</TouchableOpacity>

					<TouchableOpacity>
						<Image source={Images.twitter} style={socialLoginImage} />
					</TouchableOpacity>
				</View>

				<Image source={Images.citysilhoute} style={image} />
			</ImageBackground>
		);
	}
}

const styles = {
	backgroundImage: {
		flex: 1,
	},
	image: {
		flex: 0.4,
		width: undefined,
		height: undefined,
	},
	socialLoginView: {
		flex: 0.2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	socialLoginImage: {
		width: 40,
		height: 40,
	}
};

export default Home;
