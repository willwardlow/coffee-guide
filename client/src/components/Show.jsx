import './Show.css'
import {Link} from 'react-router-dom'

function Show(props) {

  return (
      <div className='coffee'>
        <img src={props.coffee.fields.image} alt={props.coffee.fields.name}/>
        <h2> {props.coffee.fields.name}</h2>
        <h3> {props.coffee.fields.roaster}</h3>
      {/* Button To link to /:id */}
      <Link to={`coffees/${props.coffee.id}`} key={props.coffee.fields.name}>
        <button >More Info</button>
      </Link>
        
      </div>
    
  )


}

export default Show;