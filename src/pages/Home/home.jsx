import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "./home.css";
import SlideBig from "./Slide";
import Whychoose from "./Whychoose/Whychoose";
import Hot from "./Hot";
import SpecialTour from "../../components/SpecialTour/SpecialTour";
import SuggestTour from "../../components/SuggestTour/SuggestTour";
import AboutUs from "./AboutUs/AboutUs";
import Plus from "./Plus/Plus";
import Review from "./Review/Review";
import Bloglist from "./Review/Bloglist/Bloglist";
import Feedback from "./Feedback/Feedback";
import Data from "../../data/tourlist.json";
import Slideblog from "../../components/SlideBlog/Slideblog";
import WhyTravel from "./WhyTravel/WhyTravel";
import axios from "axios";
import Loadingbox from "../../components/Loadingbox/Loadingbox";
import { callApiTourTable } from "../../api/Tour";
// import { CallAPI } from "../../components/CallApi/CallApi";


const Home = () => {

  const [Tourdata, setTourdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Location = useLocation();

  // const CallApi =async()=>{
  //   setIsLoading(true);

  //    const response = await axios({
  //     method: 'post',
  //     url: 'https://backend.vnxpedia.com/TravelAPI/AllTourTable',
  //     type: 'json'
  //     });
  //    if(response.status === 200){
  //        setTourdata(response.data.Object)
  //    }
     
  //    setIsLoading(false);
          
  //   }
  //   console.log(Tourdata);

 useEffect(()=>{
  const supo = async()=>{
  try {
 const data = await callApiTourTable()
 console.log("data >>>>>",data);
    setTourdata(data.data.Object)
  } catch (error) {
    console.log(error);
  }
  }
  supo()
 
 },[Location]);



  return (
    <div>
      <div className="slide-container">
        <SlideBig />
      </div>
      {isLoading?
        <Loadingbox/>
      :
      <div>
      {Tourdata.length>0&&<Hot data={Tourdata[0]} />}
      {/* <AboutUs /> */}
      <SuggestTour />
      <WhyTravel />
      <SpecialTour />
      <Slideblog />
      <Whychoose />
      {/* <div className="loading">
        <img src='https://png.pngtree.com/png-vector/20191102/ourlarge/pngtree-vietnamese-hat-icon-cartoon-style-png-image_1920284.jpg'></img>
      </div> */}
    </div>}
    </div>
  );
};

export default Home;
