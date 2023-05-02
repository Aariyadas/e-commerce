
import{ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <main>
          {/* <Routes></Routes>
          <Routes></Routes>
          <Routes></Routes>
          <Routes></Routes> */}
         
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
