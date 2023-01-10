import { Movie } from "./Movie";
import { useEffect ,useState } from 'react';
import { AddMovie } from './AddMovie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./gobal";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export function MovieLiest() {
  const navigator=useNavigate()
  const [movieList,setMovieList]=useState([])
  const getMovies=()=>{
    fetch(`${API}/movies`,{
    method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs)) 
  }
  useEffect(()=>getMovies(),[])

const deleteMovie=(id)=>{
  fetch(`${API}/movies/${id}`,{
    method:"DELETE",})
    .then((data)=>getMovies())
}

const upDatemovie=(id)=>{
  fetch(`${API}/movies/${id}`,{
    method:"PUT",})
    .then((data)=>data.json())

    
}


  return (
    <div>
    <div className='movie-list'>
      {movieList.map((mv) => (
   <div key={mv.id}>
        <Movie  movie={mv} id={mv.id} deleteButton={
      
      <IconButton
      color="error" onClick={()=>deleteMovie(mv.id)}
      style={{marginLeft:"auto"}} aria-label="delete" size="small">
  <DeleteIcon fontSize="small"   />
</IconButton>
      }
      editButton={ 
          <IconButton
     onClick={()=>navigator(`/movie/edit/${mv.id}`)}
      color="info" 
        sx={{marginLeft:"auto"}} 
        aria-label="edit" size="small">
<EditIcon />
  </IconButton>} 
      />
      </div>))}
    </div>
    </div>



  );
};







