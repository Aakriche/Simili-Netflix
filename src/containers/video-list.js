import {React} from 'react';
import VideoListItem from '../components/video-list-item'



const VideoList = (props) => {

  const { movieList } = props;
  console.log('----MOVIELIST----', movieList)

    return (
        <div className="videoList">
            <h1>VIDEO LIST</h1>
            <ul>
                {
                    movieList.map(movie =>{

                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack}/>

                    })
                }
            </ul>
        
        </div>
    )

    function receiveCallBack(movie) {
        props.callback(movie);
    }
    
}

export default VideoList;