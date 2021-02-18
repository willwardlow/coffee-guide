import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from './components/Footer';
import Form from './components/Form'
import Coffees from './components/Coffees';


function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path='/'>
        <Home />
      </Route>
       
      <Route exact path='/coffees'>
        <Coffees />
      </Route>

      <Route exact path='/new'>
        <Form />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
