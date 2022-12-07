import http from "../utils/http";

export const callAPIBlog =()=>{
    const URL = "BlogTable?CurrentPage=1"
    return http.post(URL)
}