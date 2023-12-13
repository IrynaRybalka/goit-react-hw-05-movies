import { getTrending } from "Api/api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState }  from "react";
import { useLocation } from "react-router-dom";
import { MovieLink, MovieList, Title } from "./Home.styled";



const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
  getTrending().then(data => {setTrendMovies(data.results);
    setIsLoading(false);
    })
  }, [])
  return (
    <div>
      <Title>Trending Movies</Title>
      <MovieList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
<MovieLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.original_title || movie.name}</MovieLink>
          </li>
        ))}
        {isLoading && <Loader/>}
      </MovieList>
    </div>
  )
}
  








  export default Home;