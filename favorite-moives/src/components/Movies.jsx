import { useState } from 'react'; 
                    // default valaue if nothinng gets passed in
function Movies({ movies = ['N/A']}) {
  const [ ourMovies, setMovies] = useState(movies);
  
  console.log(movies)
  
  function handleRemove(index){
    let currentMovies = [...ourMovies]
    console.log(currentMovies, index)
    //since index is our unique identifier we can use .splice()
    // .splice() takes in 3 arguments, only 2 are required
    // first is the index to start
    // second is how many items are you replacing
    // third is what you are replacing with
    currentMovies.splice(index, 1)
    console.log(currentMovies)
    setMovies(currentMovies)
    
    // when using a value say coffee.id it is better to use the .filter() to filter out all
    // coffees whose id does not equal the id you are targeting
  }
  
  return (
    <div>
      { ourMovies.map((movie, index) => (
        <p key={index}>{movie} <button onClick={()=> handleRemove(index)}>X</button></p>
      ))}
    </div>
  )
}

export default Movies