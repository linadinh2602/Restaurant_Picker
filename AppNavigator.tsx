
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Location from './screens/Location';
import Cusine from './screens/Cuisine';
import Price from './screens/Price';
import RestaurantPicker2 from './screens/RestaurantPicker2'
import RestaurantPicker from './screens/RestaurantPicker'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Location: { screen: Location},
  Cusine: { screen: Cusine},
  Price: { screen: Price},
  RestaurantPicker2: {screen: RestaurantPicker2},
  RestaurantPicker: {screen: RestaurantPicker}
});

const App = createAppContainer(AppNavigator);
export default App;