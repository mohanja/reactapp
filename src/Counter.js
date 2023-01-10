import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';

export function Counter() {
  let [like, setLike] = useState(1);
  let [disLike, setDislike] = useState(1);
  const likeStyle={
    color:like >= 10 ? "green":"blue"
  }

  const disLikeStyle={
    color:disLike >= 10 ? "red":"blue"
  }
const incrementLike= () => setLike(like + 1)
const dicrementLike= () => setDislike(disLike + 1)
  return (
    <div>
      <IconButton aria-label="like" color='primary' onClick={incrementLike}>
       <Badge badgeContent= {like} color="primary">
       👍
    </Badge>   
      </IconButton>

      <IconButton aria-label="dislike" color='error' onClick={ dicrementLike}>
       <Badge badgeContent= {disLike} color="error">
      👎 
    </Badge>   
      </IconButton>
  
      
     

    </div>
  );
}



