import react, { useState,useEffect } from "react";

//config
import {POSTER_SIZE,BACKDROP_SIZE , IMAGE_BASE_URL, API_KEY} from '../config'

//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";

//hook
import { useHomeFetch } from "./hooks/useHomeFetch";

//image
import Img404 from '../images/no_image.jpg'

const Home= () => {
    const {state,loading,error} = useHomeFetch();


    console.log(state);
    return (
    <>
    {state.results[0] ?
    <HeroImage
        image={`${IMAGE_BASE_URL}&{BACKDROP_SIZE}&{state.results[0].backdrop_path}`}
        title={state.results[0].oriinal_title}
        text={state.results[0].overview}
    />
    : null
}  
    <Grid header='Popular Movies'>
        {state.results.map(movie => (
            <div key={movie.id}>{movie.title}</div>
        ))}
    </Grid>
    </>
    
    
    );
};

export default Home;