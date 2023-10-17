import {createStackNavigator} from '@react-navigation/stack';
import {Route} from './Route';
import Home from '../Screens/Home/Home';
import SingleDonationItem from '../Screens/SingleDonationItem.js/SingleDonationItem';

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Route.Home} component={Home} />
      <Stack.Screen
        name={Route.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
