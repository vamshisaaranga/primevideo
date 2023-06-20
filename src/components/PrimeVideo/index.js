// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = []
  const comedyMoviesList = []
  moviesList.map(each => {
    if (each.categoryId === 'ACTION') {
      return actionMovieList.push(each)
    }
    return comedyMoviesList.push(each)
  })
  return (
    <div className="bgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeVideoImage"
      />
      <div>
        <h1 className="actionHead">Action Movies</h1>
        <div className="moviesContainer">
          <MovieSlider moviesList={actionMovieList} />
        </div>
        <h1 className="actionHead">Comedy Movies</h1>
        <div className="moviesContainer">
          <MovieSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
