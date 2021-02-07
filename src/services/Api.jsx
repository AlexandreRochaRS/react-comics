import axios from 'axios'
const url = 'https://gateway.marvel.com:443/v1/public/comics'
const timestamp = '1'
const apikey = "02b2b2d29900e1239dff745004295150"
const hash = "a5fe1057370d7ac0af69a7f51f8225e9"

const api = axios.create({
  baseURL:url,
  params: {
    ts: timestamp,
    apikey: apikey,
    hash: hash,
}})

export default api