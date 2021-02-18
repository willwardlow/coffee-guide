import axios from 'axios';
import { useState, useEffect } from 'react';
import {baseURL, config} from '../services'

function Form(props) {

  const [name, setName] = useState('');
  const [roaster, setRoaster] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [roast, setRoast] = useState('');
  const [tastingNotes, setTastingNotes] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      image,
      info,
      location,
      name,
      roaster,
      tastingNotes,
      roast
    }

    await axios.post(baseURL, {fields}, config )
  }

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor='name' > Name: </label>
      <input type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
      
      <label htmlFor='roaster' > Roaster:</label>
      <input type='text' placeholder='Enter Roaster Name' value={roaster} onChange={(e) => setRoaster(e.target.value)}/>

      <label htmlFor='roast' value={roast} onChange={(e) => setRoast(e.target.value)}> Roast: </label>
      <select>
        <option >Dark</option>
        <option >Medium</option>
        <option >Light</option>
      </select>

      <label htmlFor='tastingNotes' > Tasting Notes: </label>
      <input type='text' placeholder='Enter Tasting Notes' value={tastingNotes} onChange={(e) => setTastingNotes(e.target.value)}/>
      
      <label htmlFor='image'> Image: </label>
      <input type='text' placeholder='Enter image url' value={image} onChange={(e) => setImage(e.target.value)}/>

      <label htmlFor='location' > Location: </label>
      <input type='text' placeholder='Enter location' value={location} onChange={(e) => setLocation(e.target.value)} />
      
      <label htmlFor='info'> Enter More Info:</label> 
      <input type='text' placeholder='Enter URL coffee information' value={info} onChange={(e) => setInfo(e.target.value)} />

      <input type='submit'></input>
    </form>
  )
}

export default Form;