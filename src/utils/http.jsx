import axios from 'axios'

class Http {

  constructor() {
    this.instance = axios.create({
      baseURL: "https://backend.vnxpedia.com/TravelAPI/",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    })
 
    }
}

const http = new Http().instance

export default http
