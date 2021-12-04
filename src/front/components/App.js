import './App.css';
import { Switch, Route} from "react-router-dom";
import Main from "../pages/Main/index"
import Nav from "../components/Nav/index"
import Post from "../pages/Post/index"
import Portfolio from "../pages/Portfolio/index"
import About from "../pages/About/index"



function App() {
  return (
    <>
        <Nav/>
        <Main/>
    </>
  );
}

export default App;
