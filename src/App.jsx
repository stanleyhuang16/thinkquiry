import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
// import Home from './components/Home.jsx'; -- testing the new homepage
import Home from './pages/HomePage/Home.js';
import Room from './components/Room.jsx';
import { Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [socket, setSocket] = useState('');

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home setSocket={setSocket} />
        </Route>
        <Route path="/:roomName" children={<Room socket={socket} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
