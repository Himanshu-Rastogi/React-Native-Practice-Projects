 import axios from 'axios';

 export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers:{
    'user-key': "d2c7c3fc30bf475baaa7b8b87e7491f2"
  }
});
