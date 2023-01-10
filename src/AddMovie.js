import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { color } from '@mui/system';
import { API } from "./gobal";


const movieValidationsSchema=yup.object({
name:yup.string().required("pleace enter the name"),
poster:yup.string().required("pleace enter the post").min(4 ),
rating:yup.number().required("pleace enter the rating").min(0).max(10),
summary:yup.string().required("pleace enter the summary").min(10),
trailer:yup.string().required("pleace enter the trailer").min(4).url(),
})

export function AddMovie({ movieList, setMovieList }) {
  // const [name, setName] = useState('');
  // const [poster, setposter] = useState('');
  // const [rating, setRating] = useState('');
  // const [summary, setSummary] = useState('');
  // const [trailer, settrailer] = useState('');
   const {formik,values,handleBlur,handleChange,touched,errors,handleSubmit}=useFormik({
    initialValues:{
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer:""

    },
    validationSchema:movieValidationsSchema,
    onSubmit:(newMovie)=>{
      console.log("form values",newMovie)
      addMovie(newMovie)
    }
  })
  const navigator=useNavigate()
 const addMovie = (newMovie) => {
  
    fetch(`${API}/movies`,{
    method:"POST",
  body:JSON.stringify(newMovie),
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

      <Button variant="contained" type='submit'>add movie</Button>
    </form>
  );
}
;


