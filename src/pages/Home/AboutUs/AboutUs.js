import React from "react";
import { useState,useEffect } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutUs = () => {

  const [Contentdata, setContentdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'post',
             url: 'https://backend.vnxpedia.com/TravelAPI/ListPost?CurrentPage=1',
             type: 'json'
         });
 
         if(response.status === 200){
          console.log('response.data',response.data);
             setContentdata(response?.data?.Object?.find(d=>d.title=='About Us'));
         }
         setIsLoading(false);    
      
        }
        console.log(Contentdata);
 
     useEffect(()=>{
         callApi();     
        
     },[]);

  return (
    <div className="aboutus">
      {Contentdata!==null && <div>
      <div className="au-title">
        <h1 className="au-h1 main-home">{Contentdata.title}</h1>
      </div>
      <div className="au-main">
        <img
          className="au-img"
          src="https://th.bing.com/th/id/R.8b040e1db190fa0e5850486d7634cb26?rik=mdk%2bRGJBZxz%2bJQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8Txrx4LRc.jpg&ehk=IZp9PoYzTYrYOWfxgMGaSuzbQx5AY4YfhL8YFy8tvMk%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <div className="au-exceptional" dangerouslySetInnerHTML={{ __html: Contentdata.full_text }}>
          

        </div>

        <Link to="/">See more...</Link>
      </div>
      </div>}
    </div>
  );
};

export default AboutUs;
