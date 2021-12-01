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
import TurtleRabbit from './stories/TurtleRabbit';
import Goldilocks from './stories/Goldilocks'

//story quiz imports
import GoldilocksStoryQuiz from './stories/goldilocks-and-the-three-bears/GoldilocksStoryQuiz';
import RedHenStoryQuiz from './stories/little-red-hen/RedHenStoryQuiz'
import PeterRabbitStoryQuiz from './stories/peter-rabbit/PeterRabbitStoryQuiz';
import RumplestilskinStoryQuiz from './stories/rumplestiltskin/RumplestilskinStoryQuiz'
import TheBoyWhoCriedWolfStoryQuiz from './stories/the-boy-who-cried-wolf/TheBoyWhoCriedWolfStoryQuiz';
import GingerbreadStoryQuiz from './stories/the-gingerbread-man/GingerbreadStoryQuiz';
import LionandMouseStoryQuiz from './stories/the-lion-and-the-mouse/LionandMouseStoryQuiz';
import LittleEngineStoryQuiz from './stories/the-little-engine-that-could/LittleEngineStoryQuiz';
import GoatsStoryQuiz from './stories/the-three-billy-goats-gruff/GoatsStoryQuiz';
import TurtleRabbitStoryQuiz from './stories/the-turtle-and-the-rabbit/TurtleRabbitStoryQuiz';

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
        <Route exact path ="/GoldilocksStoryQuiz" component={GoldilocksStoryQuiz} />
        <Route exact path="/RedHenStoryQuiz" component={RedHenStoryQuiz} />
        <Route exact path="/PeterRabbitStoryQuiz" component={PeterRabbitStoryQuiz} />
        <Route exact path="/RumplestilskinStoryQuiz" component={RumplestilskinStoryQuiz} />
        <Route exact path="/TheBoyWhoCriedWolfStoryQuiz" component={TheBoyWhoCriedWolfStoryQuiz} />
        <Route exact path="/GingerbreadStoryQuiz" component={GingerbreadStoryQuiz} />
        <Route exact path="/LionandMouseStoryQuiz" component={LionandMouseStoryQuiz} />
        <Route exact path="/LittleEngineStoryQuiz" component={LittleEngineStoryQuiz} />
        <Route exact path="/GoatsStoryQuiz" component={GoatsStoryQuiz} />
        <Route exact path="/TurtleRabbitStoryQuiz" component={TurtleRabbitStoryQuiz} />
        
      </div>
    );
  }
}

export default App;
