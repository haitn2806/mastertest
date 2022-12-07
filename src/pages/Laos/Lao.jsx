import React from "react";
import TourItemlist from "./../../components/TourItemlist/TourItemlist";
import "./Lao.css";

const Lao = () => {
  return (
    <div className="Lao">
      <div className="headder"></div>
      <div className="support-1">
        <div className="title-tops"> ASIA | LAO </div>
        <div className="title-middle"> LAO </div>
        <div className="title-bot">
          {" "}
          The land of thousands of objects - The land of millions of elephants{" "}
        </div>
      </div>
      {/* <TourItemlist status="rev" />
      <TourItemlist status="norev" /> */}
      <div className="title-middle"> Hightlight of Laos</div>
      <div className="piture-lao">
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
      </div>
      <div className="title-middle"> Destination of Laos</div>
      <div className="place">
        <div className="place-1">
          <div className="a00010"> Luang Phrabang</div>
          <ul>
            <li> 123aaaaaaaaaaaa</li>
          </ul>
        </div>
        <div className="place-1">
          <div className="a00010"> Viang Chan</div>
        </div>
      </div>
      <div className="title-middle"> Experience</div>
      <div className="place">
        <div className="place-1">
          <div className="a00010"> </div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
      </div>
    </div>
  );
};

export default Lao;
