import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging60100079Navigator from '../features/Messaging60100079/navigator';
import UserProfile100078Navigator from '../features/UserProfile100078/navigator';
import Maps100059Navigator from '../features/Maps100059/navigator';
import Settings100037Navigator from '../features/Settings100037/navigator';
import Settings100022Navigator from '../features/Settings100022/navigator';
import NotificationList100021Navigator from '../features/NotificationList100021/navigator';
import Maps100020Navigator from '../features/Maps100020/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging60100079: { screen: Messaging60100079Navigator },
UserProfile100078: { screen: UserProfile100078Navigator },
Maps100059: { screen: Maps100059Navigator },
Settings100037: { screen: Settings100037Navigator },
Settings100022: { screen: Settings100022Navigator },
NotificationList100021: { screen: NotificationList100021Navigator },
Maps100020: { screen: Maps100020Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
