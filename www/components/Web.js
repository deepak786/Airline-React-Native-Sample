/**
 * Created by Deepak on 26/12/2017.
 * Component to display the url in WebView
 */

import React, { Component } from 'react';
import {
	View,
	WebView,
	ActivityIndicator,
} from 'react-native';

class Web extends Component {

	state = {
		loading: false,
	};

	/**
	 * function called when loading of url is started in WebView
	 */
	onLoadStarted() {
		this.setState({
			loading: true,
		});
	}

	/**
	 * function called when loading of url is finished in WebView
	 */
	onLoadEnd() {
		this.setState({
			loading: false,
		});
	}
	
	render() {
		const { url } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				{
					this.state.loading &&
						<ActivityIndicator style={styles.loaderStyle} />
				}
			<WebView 
				source={{ uri: url }}
				style={styles.webStyle}
				onLoadStart={this.onLoadStarted.bind(this)}
				onLoadEnd={this.onLoadEnd.bind(this)}
			/>
			</View>
	);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	webStyle: {
		flex: 1,
	},
	loaderStyle: {
		backgroundColor: 'white',
	}
};

export default Web;
