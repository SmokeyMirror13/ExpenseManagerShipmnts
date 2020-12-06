import axios from 'axios';

export default axios.create({
    baseURL: 'https://expense-manager-shipmnts.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        post: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true},
        get: {'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Credentials':true}
    }
})

