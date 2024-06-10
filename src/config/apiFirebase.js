import axios from 'axios';
const apiFirebase = axios.create({
    baseURL:'https://to-do-90d18-default-rtdb.europe-west1.firebasedatabase.app'
})
export default  apiFirebase;