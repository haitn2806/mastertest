import React from "react";
import { BsStar } from "react-icons/bs";
import axios from "axios";
import "./Feedback.css";
import FeedbackDetail from "./FeedbackDetail/FeedbackDetail";
import FormFeebback from "./FormFeebback/FormFeebback";

function Feedback() {
    // axios
    //   .get("http://localhost:6023/PythonCrawler")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    return (
        <div className="feedback">
            <div className="fb-banner">
                <img
                    src="https://www.commbox.io/wp-content/uploads/2019/10/48-1-1024x600.jpg"
                    alt=""
                    className="fb-banner--img"
                />
            </div>
            <FeedbackDetail />
            <FormFeebback />
            {/* form input */}
        </div>
    );
}

export default Feedback;
