import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';
import { useEffect ,useState } from 'react';
import { API } from "./gobal";

export function MovieDetial({ movieList }) {
  const navigate = useNavigate();
  const { id } = useParams();
  // const movie = movieList[id];
  const[movie,setMovie]=React.useState([])
  useEffect(()=>{

    fetch(`${API}/movies/${id}`,{
    method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))

},[])
  
  return (
    <div>
      <iframe width="100%"
        height="450"
        src={movie.trailer}
        title="4K HDR IMAX | Teaser - Avatar: The Way of Water | Dolby 5.1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='movie-space'>
        <div className='movie-name'><b>{movie.name} </b></div>
        <p className='movie-rateing'>⭐{movie.rating}</p>


      </div>
      <p className='movie-sumary'>{movie.summary}</p>

      <Button variant="contained" onClick={() => navigate(-1)}><ArrowBackIcon />back</Button>
    </div>
  );
}
