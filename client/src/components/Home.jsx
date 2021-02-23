import HowTo from './HowTo';
import ReactPlayer from 'react-player'
import './Home.css';

function Home() {

  // Information on various brewing methods is created up here and then passed to the HowTo component for rendering.
  const frenchPress = {
    name: 'French Press',
    imageUrl: 'https://i.imgur.com/YDNPLYk.png',
    description: 'The Classic Method. Creates a bolder, stronger, and more bitter cup. Oils are not absorbed which yield a more flavored cup.',
    instructions: ['Mix coarse grounds with hot water.' , ' Steep for 3-4 mins.' , 'Plunge and enjoy!' ] 
  }

  const aeroPress = {
    name: 'AeroPress',
    imageUrl: 'https://i.imgur.com/FMC7Ylu.png',
    description: 'Portable and versatile method. Can make espresso, cold brew, and drip coffee quickly. Yields a bold and clean quickly since coffee is extracted quickly through a paper filter ',
    instructions: ['Mix finely ground coffee with hot water (cold water is making cold brew).' , 'Swirl mixture for 30 seconds (60 seconds for cold brew).' , 'Press on the piston to extract directly in cup.' , 'Optional: add more water to desired preference.']
  }

  const pourOver = {
    name: 'Pour Over',
    imageUrl: 'https://i.imgur.com/neWtln3.png',
    description: 'Manual method with full control over all aspects. Since paper filter absorbs most of the oils, the downside is a less flavorful cup. The upside is an aromatic cup that is both bright with a clean finish',
    instructions: ['Place filter in the cone and rinse the filter with water then discard.' ,'Pour water over the grounds to saturate the oils. Wait 30 seconds. This is known as blooming.' , ' In a circular pattern, pour water over grounds, bring careful not to overflow.' , 'Wait and enjoy!']
  }

  const quotes = ['My birthstone is a coffee bean! - Anonymous', 'What goes with a cup of coffee? Another cup! - Henry Rollins']

  return (
    <main>
      <div className='intro'>
        <p>The Brown Book provides information on all-things coffee related. There's information on how to brew depending on the method as well as information on certain roasts. Users can read reviews as well as submit reviews on their own. </p>
        <blockquote className='coffee-quotel'>
          {quotes[Math.floor(Math.random()*quotes.length)]}
        </blockquote>
      </div>
      <div className='methods-container'>
        <HowTo id='french-press' method={frenchPress} />
        <HowTo id='aero-press' method={aeroPress} />
        <HowTo id='pour-over' method={pourOver} />
      </div>
      {/* ReactPlayer is a module that renders videos from links: attained here: https://www.npmjs.com/package/react-player */}
      <div className='video-container'>
        <p> Check out the video below to learn about other methods in greater detail: </p>
      <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=RN-vzamHLGs&ab_channel=Wirecutter"
        config={{ controls: true }}
        width='100%'
        height='100%' />
      </div>
      
    
    </main>
    
  )
}

export default Home;