import { getMovieDetails } from "Api/api";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Button, GenresList, InfoBox, LinkBack, MovieContainer, MovieInfo } from "./MovieDetails.styled";

const MovieDetails = ()=>{
    const [movieDetail, setMovieDetail] = useState({});
    const location = useLocation();
    const {movieId} = useParams();

    useEffect(()=>{
        getMovieDetails(movieId).then(data => setMovieDetail(data));

    }, [movieId]);

const {original_title, overview,genres, poster_path, vote_average } = movieDetail;
const score = vote_average * 10;
const scoreToFixed = score.toFixed(2);
return (
    <div>
        <Button type="button">
        <Link to={location.state?.from ?? '/'} >
<GoArrowLeft size={16}/>
Go back
        </Link>
        </Button>
        <MovieContainer>
            <img src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"/>
          <MovieInfo>
          <h2>{original_title}</h2>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
          </MovieInfo>
        </MovieContainer>
        <InfoBox>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </InfoBox>
      <Outlet/>
    </div>
)
}


export default MovieDetails;