import {React} from 'react';


const VideoDetail = (props) => {
    return (
        <div className="videoDetail">
            <h1>{props.title}</h1>
            <p>{props.description}</p>                
        </div>
    )
    
}

export default VideoDetail;