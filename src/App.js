import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home.html">
            <Home></Home>
          </Route>
          </Route>
          <Route path="/about.html">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
