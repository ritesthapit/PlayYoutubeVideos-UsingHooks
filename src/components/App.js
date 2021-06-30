import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('buildings'); //default search term = building
    //useVideos will return a list of videos and a function to return a list of videos
    
    useEffect(() => {
        setSelectedVideo(videos[0])//so as to display the first item while loading in VideoDetails
    },[videos]) //when a search is completed and we get a new list of videos -- select 1st video on that list
    
    //callback function to get what video is selected in VideoItem.js file which was passed through VideoList
    //when user clicks the videoitems, this function is run and 
    // the video object from youtubeAPI is passed and update the state -- selectedVideo property
    // then pass it to the videodetail component
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // }

    return (
        <div className="ui container">
            <SearchBar onTermSubmit = {search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="column eleven wide">
                        <VideoDetail video ={selectedVideo}/>
                    </div>
                    <div className="column five wide">
                        <VideoList onVideoSelect= {(video) => setSelectedVideo(video)} videos={videos}/>
                        {/* reference to the array we fetched when we called onTermSubmit */}
                    </div>
                </div>
            </div>        
        </div>
    )

};

export default App;
