import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import { Flex, Box } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';
import {GlobalProvider} from './Context/GlobalState';

function App() {
  console.log('app rendered')
  return (
    <GlobalProvider>
      <Flex className="App" flexDirection="row" h="100%" justify="space-between">
        <Menu />
        <ItemList />
      </Flex>
    </GlobalProvider>
  );
}

export default App;
