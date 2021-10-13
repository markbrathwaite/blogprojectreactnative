import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';


const navigator = createStackNavigator(
  {
  Index: IndexScreen
}, 
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
   }
 }
);

//export default createAppContainer(navigator);


const App = createAppContainer(navigator);

export default () => {
  return <Provider>
      <App />
  </Provider>
};

// Props
// communicates info fr parent directly to child
// easy to setup
// communicate down multiple layers

// Context - moves info fr parent to nested child
// complicated to setup, ez to communicate data fr parent to nest