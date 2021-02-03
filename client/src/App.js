import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import { Flex, Box } from "@chakra-ui/react";
import ItemList from './Components/Item/ItemList';
import SizeBar from './Components/SizeBar';

function App() {
  return (
    <Flex className="App" flexDirection="row" h="100%">
      <ItemList />
      <SizeBar />
      <Menu />
    </Flex>
  );
}

export default App;
