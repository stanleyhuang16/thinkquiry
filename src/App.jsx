import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Room from "./components/Room.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/:roomName" children={<Room/>} />
    </Switch>
    </BrowserRouter>


  );
};

export default App;
