import { useState } from 'react'
import './HowTo.css'

function HowTo(props) {

  const [showMore, setShowMore] = useState(false);


  return (
    // image taken from: https://www.vecteezy.com/vector-art/358807-hand-drawing-coffee-method-elements-clip-art-vector
    <div className='methods'>
      <img className='method-image' src={props.method.imageUrl} alt={props.method.name} />
      <h4>{props.method.name}</h4>
      
      <button className='more-trigger' onClick={() =>setShowMore(!showMore)}> Read More </button>
      {(showMore === false) ? null :
        <div className='methods-more'>
          <p>{props.method.description}</p>
          <ol className='instructions'>
          {props.method.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
          </ol>
          </div>}
          
    </div>
  )
}

export default HowTo;