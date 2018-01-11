/**
 * Created by Deepak on 22/12/2017.
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import HomeScreen from './www/components/Home';
import DashboardScreen from './www/components/Dashboard';
import EnterMobileNumber from './www/components/EnterMobileNumber';
import EnterPasscode from './www/components/EnterPasscode';
import Web from './www/components/Web';
import Keys from './www/res/Keys';

export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const firebaseConfig = Keys.firebaseConfig;
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const user = firebase.auth().currentUser;
    if (user) {
      return (
        <NavDashBoard />
      );
    }

    return (
      <NavLogin />
    );
  }
}

/**
 * navigation when user is not logged In
 */
const NavLogin = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  EnterMobileNumber: {
    screen: EnterMobileNumber,
  },
  EnterPasscode: {
    screen: EnterPasscode,
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null,
    }
  },
  Web: {
    screen: Web,
  }
});

/**
 * navigation when user is already logged In
 */
const NavDashBoard = StackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null,
    }
  },
  Web: {
    screen: Web,
  }
});
