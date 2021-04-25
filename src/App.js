import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Views/Menu';
import { Flex } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';
import {GlobalProvider} from './Context/GlobalState';
import OrderHistory from './Components/Views/OrderHistory';
import ReportHistory from './Components/Views/ReportHistory';
import ReportFull from './Components/Reports/ReportFull';

function App() {
  console.log('app rendered')
  return (
    <GlobalProvider>
      <Router>
        <Flex className="App" flexDirection="row" h="100%" justify="space-between">
          <Switch>
            
            <Route exact path='/fullreport/:id'>
              <ReportFull />
            </Route>

            <Route exact path='/reports'>
              <ReportHistory />
            </Route>

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
