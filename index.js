/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RTNVera from 'vera-rtn-sdk/js/index';

AppRegistry.registerComponent("RTNVera", () => RTNVera)
AppRegistry.registerComponent(appName, () => App);
