import axios from "axios"

const APIClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // required to handle the CSRF token
})

export default APIClient
