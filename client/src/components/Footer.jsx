function Footer() {

  const imageStyle = {
    height: '50%',
    width: '50px',
    display: 'inline-block'
    
  };
  return (
    <footer className='footer'>
      <p> &copy;2021 William A. Wardlow</p>
      <a href='https://www.linkedin.com/in/will-wardlow/'>
        <img id='linkedIn' src='https://banner2.cleanpng.com/20180418/vvw/kisspng-social-media-computer-icons-linkedin-cv-5ad72729245ce0.606481101524049705149.jpg'
          alt='linkedIn Icon'
          style={imageStyle}/>
      </a>
      <a href='https://github.com/willwardlow'>
        <img id='gitHub' src='https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png'
          alt='gitHub Icon'
          style={imageStyle}/>
      </a>
      
    </footer>
  ) 
}
export default Footer;