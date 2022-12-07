import React from "react";
import "./style.css";
import IMG from "../../../data/images/banner/16.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import TourCard from "../../../components/TourCard/TourCard";

const Hot = ({ data }) => {
  // const Datarender = data.slice(0, 5);
  return (
    <div className="hot-tour">
      <div className="hot-container">
        <div className="hot-title main-home">
          HOT TOURS
          <hr className="hr-hot" />
        </div>
        <p className="hot-main">
          We know that every traveller is different, so our experts have
          meticulously designed different Vietnam touring styles to help you
          explore Vietnam in a way that suits you the best.
        </p>
      </div>
      <div className="hot-grid">
        <div className="hot-grid1">
          <div className="hot-box1 hot-box">
            <TourCard data={data} />
          </div>
          <div className="hot-box1 hot-box">
            <TourCard data={data} />
          </div>
        </div>
        <div className="hot-grid2">
          <div className="hot-box2 hot-box">
            <TourCard data={data} />
          </div>
          <div className="hot-box2 hot-box">
            <TourCard data={data} />
          </div>
          <div className="hot-box2 hot-box">
            <TourCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
