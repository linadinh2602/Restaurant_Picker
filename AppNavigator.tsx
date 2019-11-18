
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Location from './screens/Location';
import Cusine from './screens/Cuisine';
import Price from './screens/Price';
import RestaurantPicker from './screens/RestaurantPicker';
import RestaurantDetails from './screens/RestaurantDetails';



const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Location: { screen: Location},
  Cusine: { screen: Cusine},
  Price: { screen: Price},
  RestaurantPicker: {screen: RestaurantPicker},
  RestaurantDetails: {screen: RestaurantDetails}
});

const App = createAppContainer(AppNavigator);
export default App;