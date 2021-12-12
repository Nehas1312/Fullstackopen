import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const postData = (addname) => {
    const request = axios.post(baseUrl,addname)
    return request.then(response => response.data)
}

  
export default {
    getAll,postData
}