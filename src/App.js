import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './App.scss';
//import 'fontsource-roboto';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import Header from './Components/Header';
import reducer from './store/reducer';
import ErrorModal from './Components/ErrorModal';

const store = createStore(reducer);

function App() {
  useEffect(() => {

  }, []);

  return (
    <ReduxProvider store={store}>
      <ErrorModal />
      <Router>
        <Header />
        <Switch>
          <Route path='/Favorites'>
            <Favorites />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ReduxProvider>
  );
}
export default App;


