import { useState } from 'react'

import Movies from './components/Movies';
import './MoviesStyles.css';
function App() {
  const [showMovies, setShowMovies] = useState(false)

  // pretend we made an API call to a server & got all the data 
  // for our coffees, pastries, & teas available in our warehouse. 
  
  function handleShowMovies(){
    setShowMovies(!showMovies);
  }
  
  
  return (
    // the id="menu" ties to the #menu in our MenuStyles.css
   <div class="container d-flex justify-content-center" >
    <div class="d-flex justify-content-center" id="movies">
      <h1>Our Favorites Movies</h1>
      
      <button onClick={handleShowMovies}>
        { showMovies ? 'Hide Movies' : 'Show Movies'}
        </button>
      { showMovies && <Movies movies={['Jaws', 'It', 'American Psycho']}/>}
      </div>
   </div>
  )
}

export default App;
