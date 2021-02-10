import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ButtonsScreen from './src/screens/ButtonsScreen';
import CounterScreen from './src/screens/CounterScreen';
import RandomColors from './src/screens/RandomColors';
import TextScreen from './src/screens/TextScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import SearchScreen from './src/screens/Food_App/SearchScreen';
//import DrawerScreen from './src/screens/DrawerScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Button: ButtonsScreen,
    Counter: CounterScreen,
    Random: RandomColors,
    Text: TextScreen,
    Password: PasswordScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Button',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'lightgrey'
      },
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
