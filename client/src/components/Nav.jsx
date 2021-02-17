import { Link, Route } from 'react-router-dom'

function Nav() {

  return (
    <header className='header' >
      <h2 id='title'> The Brown Book </h2>
      <nav className='nav'>
        <div className='links'>
          <Link  to='/'> Coffee Basics </Link>
        </div>
        <div className='links'>
          <Link to='/coffees'>Read About Coffee </Link>
        </div>
        <div className='links'>
          <Link to='/new'>Submit A Review</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav;