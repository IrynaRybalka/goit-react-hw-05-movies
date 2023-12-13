import { getReviews } from "Api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
const [reviewsList, setReviewList] = useState([]);
const {movieId} = useParams();
useEffect(()=>{
    getReviews(movieId).then(data=>setReviewList(data.results));
},[movieId]);
return (
    <ul>
         {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
);
};

export default Reviews;