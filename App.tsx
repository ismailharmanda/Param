import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from 'store';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from 'navigation/navigation';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
