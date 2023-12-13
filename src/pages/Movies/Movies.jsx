import { searchMovies } from "Api/api";
import { Loader } from "components/Loader/Loader";
import { SearchBar } from "components/SearchForm/SearchBar";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MovieSearchLink, MovieSearchList } from "./Movies.styled";


const Movies =()=>{
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();
const movieName = searchParams.get('movieName') ?? '';
const [moviesList, setMoviesList] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(() => {
    if (movieName === '') {
        return;
    }
    setMoviesList([]);
    setIsLoading(true);
searchMovies(movieName).then(data => {
    if(!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log('There is no movies. Please, try again');
    }
    setError(false); 
    setMoviesList(data.results);
    setIsLoading(false);
});
}, [movieName]);

const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
}



    return (
<div>
    <SearchBar onSubmit={handleSubmit}/>
    {error && <p>There is no movies with this request. Please, try again</p>}
    <MovieSearchList>
    {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieSearchLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieSearchLink>
            </li>
          );
        })}
        {isLoading && <Loader />}
    </MovieSearchList>
</div>
    )
}


export default Movies;