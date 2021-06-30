// this is a custom hook
// inputs are videos related code only
// outputs are list of videos and a function used to search a list of videos

import { useState, useEffect }  from 'react';
import youtube from '../apis/youtube';
//input is defaultSearchTerm
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        search(defaultSearchTerm);//set the search term manually so to display something at the beginning
    },[defaultSearchTerm]); //run this function only one time

    //call back function to fetch videos from youtube api
    const search = async (term) => {
        //parameter term will have the value of input from searchbar
        //API request is always asynchronous operation
        //so interact with it with a promise or async await syntax
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        //our list is contained inside of response.data.items --- check by console.log(response)
        setVideos(response.data.items); 
        //update the piece of state (videos) --- cause the App component to be rerendered as it is called by App
    };
    return [videos, search]; //output

};

export default useVideos;