import axios from 'axios'
const url = 'https://gateway.marvel.com:443/v1/public'
const timestamp = process.env.REACT_APP_MARVEL_API_TIMESTAMP
const apikey = process.env.REACT_APP_MARVEL_API_KEY
const hash = process.env.REACT_APP_MARVEL_API_HASH

const api = axios.create({
  baseURL:url,
  params: {
    ts: timestamp,
    apikey: apikey,
    hash: hash,
}})

export default api