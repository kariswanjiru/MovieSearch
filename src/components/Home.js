import React from "react";

//config
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';

//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumbs';
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import Img404 from '../images/no_image.jpg'; 

const Home= () => {
    const {state,loading,error,searchTerm,setSearchTerm ,setIsLoadingMore} = useHomeFetch();


    console.log(state);

    if(error)
    return <div> Something wemt Wrong ...</div>
    return (
        <>
{!searchTerm && state.results[0] ?(
    <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
    />): null}  
    <SearchBar setSearchTerm={setSearchTerm}/>
    <Grid header={searchTerm ? 'Search Results':'Popular Movies'}>
        {state.results.map(movie => (
            <Thumb 
            key={movie.id}
            clickable
            image={
                movie.poster_path
                ?IMAGE_BASE_URL + POSTER_SIZE+ movie.poster_path
                :Img404
            }
            movieId = {movie.id}
            />
        ))}
    </Grid>
    {loading && <Spinner />}
    {state.page < state.total_pages && !loading && (
        <Button text='Load More' callBack={()=> setIsLoadingMore(true)}  />
    )}
    </>
    );
};

export default Home;

