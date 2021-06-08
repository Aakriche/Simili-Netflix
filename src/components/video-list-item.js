import {React} from 'react';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = (props) => {
  
    const { movie } = props;

    return (
        <li className="videoListItem">
            <h5>{movie.title}</h5>
            <img height="100px" width="100px" src={`${IMAGE_URL}${movie.poster_path}`} alt ={movie.title.slice(0,10)}/>
                
        </li>
    );
    
}

export default VideoListItem;