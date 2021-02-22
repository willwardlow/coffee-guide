import {Link} from 'react-router-dom'

function New() {
  return (
    <div className='coffee' id='new'>
      <Link to='new'>
      <img className='plus' src='https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565530-stock-illustration-plus-vector-icon.jpg'
          alt='plus-sign' />
      </Link>
      <Link to='/new'>
        <button className='button'> Add New!</button>
      </Link>
      
    </div>
  )
}

export default New;