import React from 'react';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import configureStore from "./configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const AppContainer = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile },
  }, { 
    navigationOptions: {
      header: false
  }
});
const Application = createAppContainer(AppContainer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application/>
      </Provider>
    );
  }
}
export default App;