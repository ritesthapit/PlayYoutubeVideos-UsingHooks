import axios from 'axios';

const KEY = 'AIzaSyBov_Ybywm1yft4r2KqkWPWrQN1ObXoyLM';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params:  {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});