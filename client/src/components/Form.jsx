import axios from 'axios';
import { useState } from 'react';
import { baseURL, config } from '../services'
import './Form.css'

function Form(props) {

  const [name, setName] = useState('');
  const [roaster, setRoaster] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [roast, setRoast] = useState('');
  const [notes, setNotes] = useState('');
  const [info, setInfo] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      image,
      info,
      location,
      name,
      roaster,
      notes,
      roast
    }
    await axios.post(baseURL, { fields } , config);

  }

    

  return (

    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label className='name' htmlFor='name' > Name: </label>
        <input className='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
      
        <label className='roaster'htmlFor='roaster' > Roaster:</label>
        <input className='roaster'type='text' placeholder='Roaster Name' value={roaster} onChange={(e) => setRoaster(e.target.value)}/>

        <label className='roast' htmlFor='roast' > Roast: </label>
        <select className='roast' onChange={(e) => setRoast(e.target.value)}>
          <option value={roast} >Dark</option>
          <option value={roast} >Medium</option>
          <option value={roast} >Light</option>
        </select>
        
        <label  htmlFor='tastingNotes' > Tasting Notes: </label>
        <input  type='text' placeholder='Fruity, Chocolately, etc' value={notes} onChange={(e) => setNotes(e.target.value)}/>
      
        <label  htmlFor='image'> Image: </label>
        <input  type='text' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)}/>

        <label  htmlFor='location' > Location: </label>
        <input  type='text' placeholder='City, State' value={location} onChange={(e) => setLocation(e.target.value)} />
      
        <label  htmlFor='info'> Enter More Info:</label> 
        <input  type='text' placeholder='Coffee URL' value={info} onChange={(e) => setInfo(e.target.value)} />

        <input id='submit'type='submit'></input>
      </form>
    </div>
    
  )
}

export default Form;