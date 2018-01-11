/**
 * Created by Deepak on 26/12/2017.
 * Dashboard Component
 * user comes to this component after login.
 * this displays the user info and CheckinList
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	AsyncStorage,
} from 'react-native';
import Header from './Header';
import CheckInList from './CheckInList';
import InfoView from './InfoView';

let username;
class Dashboard extends Component {

	state = {
		loading: true,
	};

	async componentWillMount() {
		await this.init();

		this.setState({
			loading: false,
		});
	}

	/**
	 * function to get the username from the @AsyncStorage
	 */
	async init() {
		username = 'username';

		try {
			username = await AsyncStorage.getItem('name');
		} catch (error) {
			// Error retrieving data
		}
	}

	render() {
		const { container, usernameStyle, listContainer, infoTextStyle } = styles;
		if (this.state.loading) {
			return (
				null
			);
		}
		return (
			<View style={container}>
				<Header title='CHECK-IN' />

				<View style={listContainer}>

					<InfoView 
						title={`Hi ${username}`}
						subTitle={'Please select your flight to continue.'}
					/>

					<CheckInList 
						navigation={this.props.navigation}
					/>

				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	listContainer: {
		margin: 15,
		flex: 1,
	},
};

export default Dashboard;
