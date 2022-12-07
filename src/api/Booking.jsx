import http from "../utils/http";


export const InsertBooking=()=>{
    const URL ="InsertBooking"
    return http.post(URL)
}