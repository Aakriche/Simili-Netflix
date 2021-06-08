import {React} from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const Video = ({videoId}) => {
    return (
        <div className="video">
            <iframe height= "250px" width="500px" src={`${YOUTUBE_URL}${videoId}`}/>
                
        </div>
    )
    
}

export default Video;