import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import { Flex, Box } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';
import SizeBar from './Components/SizeBar';
import {GlobalProvider} from './Context/GlobalState';

function App() {
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
