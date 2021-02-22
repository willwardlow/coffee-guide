import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { baseURL, config } from './services';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from './components/Footer';
import Form from './components/Form'
import Coffees from './components/Coffees';
import More from './components/More';


function App() {

  const [coffees, setCoffees] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const brewCoffees = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      };
      const resp = await axios.get(baseURL, config);
      setCoffees(resp.data.records)
      console.log(resp.data.records);
    };
    brewCoffees();
  }, [toggleFetch])

  return (
    <div className="App">
      <Nav />

      <Route exact path='/'>
        <Home />
      </Route>
      
      <Route exact path='/coffees'>
        <Coffees coffees={coffees}/>
      </Route>

      <Route exact path='/new'>
        <Form coffees={coffees} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path='/coffees/:id'>
        <More coffees={coffees} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
