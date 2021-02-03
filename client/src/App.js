import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import { Flex } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';

function App() {
  return (
    <Flex className="App" flexDirection="row" h="100%">
      <ItemList />
      <Menu />
    </Flex>
  );
}

export default App;
