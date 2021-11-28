import './App.css';
import { Switch, Route} from "react-router-dom";
import Main from "../pages/Main/index"
import Nav from "../components/Nav/index"
import Post from "../pages/Post/index"
import Portfolio from "../pages/Portfolio/index"
import About from "../pages/About/index"



function App() {
  return (
    <div className="App">
      <div className="contents">
        <Nav/>
        <Switch> 
          <Route exact={true} path="/">
            <Main/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Post">
            <Post/>
          </Route>
          <Route path="/Portfolio">
            <Portfolio/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
