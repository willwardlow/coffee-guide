import axios from 'axios';
import {Link , Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import New from './New'
import Show from './Show.jsx';
import { baseURL, config } from '../services';
import './Coffees.css'


function Coffees() {

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
    <Route to='/coffees'>
      <div>
        <div className='coffees-intro'>
          <p> Browse the list to discover a new favorite!</p>
        </div>
        <div className='coffee-container'>
        {coffees.map((coffee) => (
          <Show key={coffee.id} coffee={coffee}  />
        ))}
          <New />
    </div>
      </div>
      
    </Route>
    
  )
}

export default Coffees;