import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3017d57421ce4234bdf8a0add66babdb'
    }
})