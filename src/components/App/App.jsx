import { lazy } from "react";
import { Layout } from "components/Layout/Layout";
import { Route, Routes } from "react-router-dom"


// import Cast from "components/Cast/Cast";
// import Reviews from "components/Reviews/Reviews";
// import Home from "pages/Home/Home";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Movies from "pages/Movies/Movies";
// import NotFound from "pages/NotFound/NotFound";


const Home = lazy(()=> import('pages/Home/Home'));
const Movies =lazy(()=>import('pages/Movies/Movies'));
const MovieDetails =lazy(()=>import('pages/MovieDetails/MovieDetails'));
const Cast =lazy(()=>import('components/Cast/Cast'));
const Reviews =lazy(()=>import('components/Reviews/Reviews'));
const NotFound =lazy(()=>import('pages/NotFound/NotFound'));


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element ={<Home/>}/>
      <Route path="/movies"element ={<Movies/>}/>
      <Route path="movies/:movieId" element ={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Route>
   </Routes>
  );
}

export default App; 