import {React} from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const Video = ({videoId}) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" height= "400px" width="700px" src={`${YOUTUBE_URL}${videoId}`}/>
                
        </div>
    )
    
}

export default Video;