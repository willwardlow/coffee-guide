import {Link} from 'react-router-dom'

function New() {
  return (
    <div className='coffee'>
      <img src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565530-stock-illustration-plus-vector-icon.jpg'
        alt='plus sign' />
      <Link to='/new'>
        <button> Add New!</button>
      </Link>
      
    </div>
  )
}

export default New;