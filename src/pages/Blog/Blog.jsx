import React from "react";
import "./Blog.css";
import BlogEx from "../../components/BlogEx/BlogEx";
import { Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {

  const [blogDetails, setBlogDetails] = useState([]);    
  const [isLoading, setIsLoading] = useState(false);
  const [Tag,setTag] = useState('TYPE_CLASSIC');
  const PickTag = (e)=> {
    setTag(e.target.value);
  }

  const callApi =async()=>{          
      setIsLoading(true);              
      const response = await axios({               
          method: 'post',               
          url: `https://backend.vnxpedia.com/TravelAPI/BlogTable?tag=${Tag}`,               
          type: 'json'           
      });              
          
          setBlogDetails(response.data.Object)           
          
             
      } 

  useEffect(()=>{           
      callApi();                      
  },[Tag]);

  return (
    <div className="main-blog">
      <div className="top-blog">
        <div className="blog-container">
         
          <div className="midlle-topblog">
            <img
              className="image-blog"
              alt=""
              src="https://cdn.shopify.com/s/files/1/0165/7044/files/about_image.png?v=1666053558"
            />
          </div>

          <div className="bot-topblog">
          <div className="title-blogmain">Blog</div>
            <div className="bottom-title">
              {" "}
              VNXpedia - Travel all the world{" "}
            </div>
            <div className="text-area">
              Sibella Court is a creative director, interior & product designer,
              television presenter, author & founder of the The Society inc , a
              design company, online hardware emporium and purveyor of home
              goods.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="middle-blog">
        
        <div className="tag-choice">
          <div className="layer-middle">
            <button className="button-blog" value='TYPE_CLASSIC' onClick={(e)=>PickTag(e)}>CLASSIC</button>
            <button className="button-blog" value='TYPE_FAMILY' onClick={(e)=>PickTag(e)}>FAMILY </button>
            <button className="button-blog" value='TYPE_BEACH' onClick={(e)=>PickTag(e)}>BEACH </button>
            <button className="button-blog" value='TYPE_SHORTTRIPS' onClick={(e)=>PickTag(e)}>SHORT TRIPS </button>
            <button className="button-blog" value='TYPE_CULINARY' onClick={(e)=>PickTag(e)}>CULINARY </button>
            <button className="button-blog" value='TYPE_ADVENTURE' onClick={(e)=>PickTag(e)}>ADVENTURE </button>
            <button className="button-blog" value='TYPE_CRUISES' onClick={(e)=>PickTag(e)}>CRUISES </button>
            <button className="button-blog" value='TYPE_GOLF' onClick={(e)=>PickTag(e)}>GOLF </button>
            <button className="button-blog" value='TYPE_WELLES' onClick={(e)=>PickTag(e)}>WELLES </button>
            <button className="button-blog" value='TYPE_M.I.C.E' onClick={(e)=>PickTag(e)}>M.I.C.E </button>
            <button className="button-blog" value='TYPE_LUXURY' onClick={(e)=>PickTag(e)}>LUXURY </button>
            <button className="button-blog" value='TYPE_HERITAGES' onClick={(e)=>PickTag(e)}>HERITAGES </button>
            <button className="button-blog" value='TYPE_REPONSIBLETRAVEL' onClick={(e)=>PickTag(e)}>REPONSIBLE TRAVEL </button>
          </div>
        </div>
        <div className="blog-list-des">
        <h1>BLOG for {Tag.replace('TYPE_','')}</h1>
          <div className="layerblog">
            {" "}
            {blogDetails.length > 0 && blogDetails.map((d) => (
              <div className="blog-item-container">
              <BlogEx data={d}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-blog"></div>
    </div>
  );
};

export default Blog;
