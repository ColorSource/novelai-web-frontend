// src/App.tsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import DrawingSettings from './components/DrawingSettings';
import ImageDisplay from './components/ImageDisplay';
import NavBar from './components/NavBar';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box maxW="80%" mx="auto" p={5}>
        <DrawingSettings />
        <ImageDisplay />
      </Box>
    </ChakraProvider>
  );
}

export default App;
