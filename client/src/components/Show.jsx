import './Show.css'

function Show(props) {

  return (
      <div className='coffee'>
        <img src={props.coffee.fields.image} alt={props.coffee.fields.name}/>
        <h2> {props.coffee.fields.name}</h2>
        <h3> {props.coffee.fields.roaster}</h3>
        {/* Button To link to /:id */}
        <button>Read More</button>
      </div>
    
  )


}

export default Show;