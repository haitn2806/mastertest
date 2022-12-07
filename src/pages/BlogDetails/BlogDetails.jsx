import "./BlogDetails.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function BlogDetails() {
  const [blogDetails, setBlogDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();
  const BlogLoad=(blogDetails.find((d) => d.Id == param.id));

  const callApi = async () => {
    setIsLoading(true);
    const response = await axios({
      method: "post",
      url: "https://backend.vnxpedia.com/TravelAPI/BlogTable",
      type: "json",
    });

    setBlogDetails(response.data.Object);

    setIsLoading(false);
  };
  console.log(blogDetails);

  useEffect(() => {
    callApi();
    
  }, []);
  // const BlogLoad = blogDetails.find((d) => d.id == param.id);
  console.log(BlogLoad);

  
 

  return (
    <div>
      {BlogLoad&&
    <div className="blogdetails-container">

      <div className="blogdetails-bannerimg">
        <img
          className="blogdetails-banner-img"
          src={BlogLoad.Image}
          alt="BannerImage"
        />
        
      </div>

      <div className="blogdetail-title">
                          
        <h1 className="jjs-title">{BlogLoad.Title}</h1>
       
        
      </div>
     

    
      <div className="blogdetails-content-container" >
        {BlogLoad.Detail}
        
      </div>
      <hr />
    </div>}
    </div>
  );
}

export default BlogDetails;
