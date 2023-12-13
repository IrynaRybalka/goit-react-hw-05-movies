import { getMovieCredits } from 'Api/api';
import{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Cast = () => {
    const [castList, setCastList] = useState([]);
    const {movieId} = useParams();

    useEffect(()=> {
        getMovieCredits(movieId).then(data=>setCastList(data.cast));
    },[movieId]);

    return(
        <ul>
  {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <h3>{name}</h3>
              <p> Character: {character}</p>
            </li>
          ))
        : "Sorry, there isn't any info :("}
        </ul>
    )
}


export default Cast;