import { useParams } from 'react-router-dom'
import './More.css'

function More(props) {

  const params = useParams();

  const coffee = props.coffees.find((coffee) => coffee.id === params.id)
  // const { city, state } = coffee.fields.location;

  if (!coffee) {
    return <h4> Grinding....... </h4>
  }

  return (
      <div className='more-info'>
      <img src={coffee.fields.image} alt={coffee.fields.name} />
      <p><span>Name: </span>{coffee.fields.name}</p>
      <p><span>Roaster: </span>{coffee.fields.roaster} </p>
      <p><span>Location: </span>{coffee.fields.location}</p>
      <p><span>Notes: </span>{coffee.fields.notes}</p>
      <button><a href={coffee.fields.info}> Visit Roaster Site</a></button>
      </div>
    
  )
}

export default More;