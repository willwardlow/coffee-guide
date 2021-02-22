import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header className='header' >
      <h2 id='title'> The Brown Book </h2>
      <nav className='nav'>
        <div className='links'>
          <Link  to='/'> Home </Link>
        </div>
        <div className='links'>
          <Link to='/coffees'> Entries </Link>
        </div>
        <div className='links'>
          <Link to='/new'>New Entry</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav;