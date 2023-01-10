import { Counter } from './Counter';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { navigate, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { API } from "./gobal";

export function Movie({ movie,id ,deleteButton,editButton}) {
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

const [show, setShow] = useState(ExpandLessIcon);
const navigate=useNavigate();
  return (
    <Card className='movie-container'>
      <img src={movie.poster} alt={movie.name} className="pic" />
     <CardContent>
   <div className='movie-space'>
        <div className='movie-name'><b>{movie.name} </b>
         <IconButton aria-label="delete" color='info' onClick={() => setShow(!show)}>
 { show ? <ExpandLessIcon/>:
  <ExpandMoreIcon/>}
</IconButton>
<IconButton aria-label="delete" color='info' onClick={() => navigate(`/movie/${id}`)}>
<InfoIcon/>
</IconButton> 
</div>
        <p style={styles} className='movie-rateing'>⭐{movie.rating}</p>
      </div>
    {show ? <p className='movie-sumary'>{movie.summary}</p> : null}    
    </CardContent>
    <CardActions>
  
    <Counter />
    {editButton}
    {deleteButton}
   
     </CardActions>
  </Card>
  );
}


