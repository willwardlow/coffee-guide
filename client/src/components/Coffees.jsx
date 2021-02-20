import axios from 'axios';
import {Link , Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import New from './New'
import Show from './Show.jsx';
import './Coffees.css'


function Coffees(props) {

  return (
    <Route path='/coffees'>
      <div>
        <div className='coffees-intro'>
          <p> Browse the list to discover a new favorite!</p>
        </div>
        <div className='coffee-container'>
          {props.coffees.map((coffee) => (
          <Show key={coffee.id} coffee={coffee}  />
        ))}
          <New />
    </div>
      </div>
      
    </Route>
    
  )
}

export default Coffees;