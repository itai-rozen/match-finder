import axios from 'axios'
const API_KEY = '24953754-d96dc5e87ac958d6d9e774534'

export default axios.create({
baseURL : `https://pixabay.com/api/?key=${API_KEY}&category=food&image_type=photo&totalHits=10`
})