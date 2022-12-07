import React from "react";
import "./TravelStyle.css";
import BlogEx from "../../components/BlogEx/BlogEx";
import TourItemlist from "../../components/TourItemlist/TourItemlist";
import { useParams } from "react-router-dom";
import Style from "../../data/stylelist.json";
import Datalist from "../../data/tourlist.json";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../components/Layout";

const Tourlist = () => {
    const param = useParams();
    // console.log(param.id);
    const Styleload = Style.find((d) => d.title === param.id);
    // console.log(Styleload);
    const Renderlist = Datalist.filter((d) => d.style === param.id);

    const [blogList, setBlogList] = useState([]);
    const Datacontext = useContext(UserContext);

    const callAPIBlog = async () => {
        const response = await axios({
            method: "post",
            url: `https://backend.vnxpedia.com/TravelAPI/BlogTable?CurrentPage=1`,
            type: "json",
        });

        if (response.status === 200) {
            setBlogList(response.data.Object);
        }
    };

    useEffect(() => {
        callAPIBlog();
    }, [Datacontext.lang, param.id]);

    return (
        <div className="body-classic">
            <div className="banner-picture">
                <div className="title-travelstyle">{Styleload.title}</div>
                {/* <div className="detail-travelstyle"> Việt Nam - Timeless Charm </div> */}
            </div>
            <div className="are-main">
                <div className="page-up">
                    <div className="title-top"> See The World Together</div>
                    <div className="middle-page">{Styleload.content}</div>
                    <div className="end-page">
                        {" "}
                        Look By Eyes- Feel By Heart{" "}
                    </div>
                </div>

                {Renderlist.map((d, index) => (
                    <TourItemlist data={d} status="rev" />
                ))}
            </div>

            <h1 id="exp" className="blog-travelstyle">
                TRAVEL GUIDES & INSPIRATIONS
            </h1>
            {blogList.length > 0 && (
                <div className="blog-list-des-vn" key={blogList.index}>
                    <div className="blog-des">
                        {blogList.slice(1, 4).map((d) => (
                            <div className="des-blog">
                                <BlogEx data={d} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tourlist;
