function Footer() {

  const imageStyle = {
    height: '30px',
    width: '30px',
    display: 'inline-block'
  };
  return (
    <footer className='footer'>
      <p> &copy;2021 William A. Wardlow</p>
      <a href='https://www.linkedin.com/in/will-wardlow/'>
        <img id='linkedIn' src='https://i.imgur.com/hyXbuk5.png'
          alt='linkedIn Icon'
          style={{ height: '30px' , width: '30px' }}/>
      </a>
      <a href='https://github.com/willwardlow'>
        <img id='gitHub' src='https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png'
          alt='gitHub Icon'
          style={{ width: '50px' , height: '30px'}}/>
      </a>
      
    </footer>
  ) 
}
export default Footer;