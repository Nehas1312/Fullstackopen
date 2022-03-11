import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const postData = (addname) => {
    const request = axios.post(baseUrl,addname)
    return request.then(response => response.data)
}
const deleteName = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const editName = (id,editPerson)=>{
    const request = axios.put(`${baseUrl}/${id}`,editPerson)
    return request.then(response => response.data)
}

export default {
    getAll,postData,deleteName,editName  
}