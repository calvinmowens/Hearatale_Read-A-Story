import './App.css';
import React from 'react';
import Home from './Home'
import Story from './Story';
import { Route, Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

//story imports
import RedHen from './stories/RedHen';
import PeterRabbit from './stories/PeterRabbit';
import Rumplestiltskin from './stories/Rumplestilskin';
import TheBoyWhoCriedWolf from './stories/TheBoyWhoCriedWolf';
import Gingerbread from './stories/Gingerbread';
import LionandMouse from './stories/LionandMouse';
import Engine from './stories/Engine';
import Goats from './stories/Goats';
import TurtleRabbit from './stories/TurtleRabbit'
import Goldilocks from './stories/Goldilocks'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/bookshelf" component={Bookshelf} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/redhen" component={RedHen} />
        <Route exact path="/peterrabbit" component={PeterRabbit} />
        <Route exact path="/rumplestiltskin" component={Rumplestiltskin} />
        <Route exact path="/TheBoyWhoCriedWolf" component={TheBoyWhoCriedWolf} />
        <Route exact path="/Gingerbread" component={Gingerbread} />
        <Route exact path="/Goldilocks" component={Goldilocks} />
        <Route exact path="/LionandMouse" component={LionandMouse} />
        <Route exact path="/Engine" component={Engine} />
        <Route exact path="/Goats" component={Goats} />
        <Route exact path="/TurtleRabbit" component={TurtleRabbit} />
      </div>
    );
  }
}

export default App;
