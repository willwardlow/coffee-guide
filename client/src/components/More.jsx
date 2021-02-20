import { useParams } from 'react-router-dom'
import './More.css'

function More(props) {

  const params = useParams();

  const coffee = props.coffees.find((coffee) => coffee.id === params.id)

  if (!coffee) {
    return <h4> Grinding....... </h4>
  }

  return (
      <div className='more-info'>
      <img src={coffee.fields.image} alt={coffee.fields.name} />
      <h4>Name: {coffee.fields.name}</h4>
      <h3>Roaster: {coffee.fields.roaster} </h3>
      <h3>Location: {coffee.fields.location}</h3>
      <h3>Notes: {coffee.fields.notes}</h3>
      <h3>Description:</h3> <p>{coffee.fields.description}</p>
      <button><a href={coffee.fields.info}> Visit Roaster Site:</a></button>
      <p></p>
    </div>
    
  )
}

export default More;