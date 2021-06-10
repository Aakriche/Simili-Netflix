import SearchBar from "../components/searchBar";
import "../App.css";
import VideoList from "./video-list";
import axios from "axios";
import React, { Component } from "react";
import VideoDetail from "../components/video-detail";
import Video from "../components/video";

const API_KEY = "api_key=b1bb009f89a909c0ae0b65bc17104e0e";
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL ="discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {},
      currentMovie: {},
    };
  }

  componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
      function (res) {
        this.setState(
          {
            movieList: res.data.results.slice(1, 6),
            currentMovie: res.data.results[0],
          },
          function () {
            this.applyCurrentVideo();
          }
        );
      }.bind(this)
    );
  }

  applyCurrentVideo() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`
      )
      .then(
        function (res) {
          const youtubeKey = res.data.videos.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId = youtubeKey;
          this.setState({ currentMovie: newCurrentMovieState });
        }.bind(this)
      );
  }

  receiveCallBack(movie) {
    this.setState({currentMovie : movie}, () => {
      this.applyCurrentVideo();
      this.setRecommendation();
    })

  }

  setRecommendation() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function (res) {
      this.setState({ movieList: res.data.results.slice(0, 5) });
    }.bind(this));
  }


  onClickSearch(searchText){
    console.log(searchText);
    axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function (res) {
      console.log('---moviesearch----', res);
      if (res.data && res.data.results[0]) {
        if (res.data.results[0].id !== this.state.currentMovie.id){
            this.setState({currentMovie : res.data.results[0] }, () => {
              this.applyCurrentVideo();
              this.setRecommendation();
            })
        }
    }
  }.bind(this));
}

  render() {
    const renderVideoList = () => {
      if (this.state.movieList.length >= 5) {
        return <VideoList movieList={this.state.movieList} callback={this.receiveCallBack.bind(this)}/>;
      }
    };

    return (
      <div className="App">
        <SearchBar callback={this.onClickSearch.bind(this)}/>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
          </div>
          <div className="col-md-4">{renderVideoList()}</div>
        </div>
        <VideoDetail
          title={this.state.currentMovie.title}
          description={this.state.currentMovie.overview}
        />
      </div>
    );
  }
}

export default App;
