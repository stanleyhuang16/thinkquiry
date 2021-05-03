import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Room from './components/Room.jsx';

const App = () => {
  const [socket, setSocket] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home setSocket={setSocket} />
        </Route>
        <Route path='/:roomName' children={<Room socket={socket} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
