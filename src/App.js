import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Views/Menu';
import { Flex, Box } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';
import {GlobalProvider} from './Context/GlobalState';
import OrderHistory from './Components/Views/OrderHistory';

function App() {
  console.log('app rendered')
  return (
    <GlobalProvider>
      <Router>
        <Flex className="App" flexDirection="row" h="100%" justify="space-between">
          <Switch>
            

            <Route exact path='/orders'>
              <OrderHistory />
            </Route>

            <Route exact path='/'>
              <Menu />
              <ItemList />
            </Route>
          </Switch>
        </Flex>
      </Router>
      
    </GlobalProvider>
  );
}

export default App;
