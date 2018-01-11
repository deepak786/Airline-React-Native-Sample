/**
 * Created by Deepak on 02/01/2018.
 * This component renders a list containg the items renders from CheckInItem.
 * Onclick of item user goes to Respective Site in webview.
 * Data array for the List is from CheckInListData
 */

import React, { Component } from 'react';
import {
	FlatList,
} from 'react-native';
import CheckInItem from './CheckInItem';
import CheckInListData from '../res/CheckInListData';

class CheckInList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listData: CheckInListData,
		};
	}

	/**
	 * function to be called when click on CheckInListItem
	 * @param {item} object: containing the info of CheckInListItem
	 */
	onPress(item) {
		this.props.navigation.navigate('Web', { url: item.url });
	}

	renderItem = ({ item, index }) => { // eslint-disable-line
		return (
			<CheckInItem 
				item={item}
				onPress={this.onPress.bind(this)}
			/>
		);
	};

	keyExtractor = (item, index) => index;

	render() {
		const { listStyle } = styles;
		return (
			<FlatList
				style={listStyle}
				data={this.state.listData}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem.bind(this)}
				numColumns={3}
				horizontal={false}
			/>
		);
	}
}

const styles = {
	listStyle: {
		marginTop: 25,
	},
};

export default CheckInList;
