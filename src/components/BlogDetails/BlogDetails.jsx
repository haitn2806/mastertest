import React from "react";
import './BlogDetails.css'
import { useState, useEffect } from "react";
import axios from "axios";

function BlogDetails() {

    // const [blogDetails, setBlogDetails] = useState([]);    
    // const [isLoading, setIsLoading] = useState(false);

    // const callApi =async()=>{          
    //     setIsLoading(true);              
    //     const response = await axios({               
    //         method: 'post',               
    //         url: 'https://backend.vnxpedia.com/TravelAPI/BlogTable?CurrentPage=1',               
    //         type: 'json'           
    //     });        
            
    //         setBlogDetails(response.data.Object)           
            
    //         setIsLoading(false);            
    //     }          
    //     console.log(blogDetails);     

    // useEffect(()=>{           
    //     callApi();                      
    // }, []);

    const i = 1;

    return ( 
        <div className="blogDetails">
            <h1 className="blogDetails-header">Blog Detail</h1>
            <div className="blogDetails-content">
                <h2 className="bd-title">hi</h2>
                {/* {console.log(blogDetails[0].Title)} */}
                <div className="bd-img">
                    <img src="" alt="" />
                </div>
                <div className="bd-content">
                hi
                </div>
            </div>
            <div className="blogDetails-footer">
                <span className="bd-tag">Tag: </span>
                hi
            </div>
        </div>
    );
}

export default BlogDetails;