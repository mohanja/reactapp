import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { color } from '@mui/system';
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "./gobal";

const movieValidationsSchema=yup.object({
name:yup.string().required("pleace enter the name"),
poster:yup.string().required("pleace enter the post").min(4 ),
rating:yup.number().required("pleace enter the rating").min(0).max(10),
summary:yup.string().required("pleace enter the summary").min(10),
trailer:yup.string().required("pleace enter the trailer").min(4).url(),
})

export function EditMovie() {
  const { id } = useParams();
  // const movie = movieList[id];
  const[movie,setMovie]=useState(null)
  useEffect(()=>{

    fetch(`${API}/movies/${id}`,{
    method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))

},[])
return(
  <div>
    {movie?<EditFormMovie movie={movie}/>:"loading..."}
  </div>
)


}
function EditFormMovie({movie}){

   const {formik,values,handleBlur,handleChange,touched,errors,handleSubmit}=useFormik({
    initialValues:{
      name:movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer:movie.trailer

    },
    validationSchema:movieValidationsSchema,
    onSubmit:(updateMovie)=>{
      console.log("form values",updateMovie)
      addMovie(updateMovie)
    }
  })
  const navigator=useNavigate()
 const addMovie = (updateMovie) => {
  
    fetch(`${API}/movies/${movie.id}`,{
    method:"PUT",
  body:JSON.stringify(updateMovie),
  headers: { "Content-type": "application/json" },
}).then(()=>navigator("/movies"))
  };


  return (
    <form onSubmit={handleSubmit} className="add-movie-form">

      <TextField 
      
        label="Name"
         name='name'
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.name}
        error={touched.name && errors.name}
         helperText={touched.name && errors.name? errors.name:null}
         color="success"
          />
         

      <TextField label="Poster"
 
         name='poster'
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.poster}
         error={touched.poster && errors.poster}
         helperText={touched.poster&& errors.poster? errors.poster:null}
         color="success"
       />
    
     
      <TextField  label="Rating"
        
        name='rating'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating? errors.rating:null}
        color="success"
         />
    
      
      <TextField label="Summary" 
        name='summary'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary} 
        error={touched.summary&& errors.summary}
        helperText={touched.summary && errors.summary? errors.summary:null} 
        color="success"
        />

      
      <TextField  label="Trailer"
        name='trailer'
        onChange={ handleChange}
        onBlur={handleBlur}
        value={values.trailer} 
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer? errors.trailer:null}
        color="success"
        />

      <Button variant="contained" color='success' type='submit'>savemovie</Button>
    </form>
  );
}
;