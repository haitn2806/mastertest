import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Slide.css";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";

const slides = [
    {
        id: 1,
        title: "Top experiences for 2023",
        content:
            "Request our latest publication 'In the moment' for our specialists’ top-rated trips and experiences that you can make your own.",
        link: "REQUEST THE BROCHURE",
    },
    {
        id: 2,
        title: "Inspiration for the responsible traveller",
        content:
            "Browse trips and tips for responsible travellers who wish to leave a positive impact on your next journey.",
        link: "RESPONSIBLE TRAVEL IDEAS",
    },
    {
        id: 3,
        title: "Arrange a video appointment",
        content:
            "Our specialists can help bring your trip to life, sharing maps, images and first-hand experience.",
        link: "HOW ABOUT APPOINTMENTS WORK",
    },
    {
        id: 4,
        title: "Top experiences for 2023",
        content:
            "Request our latest publication 'In the moment' for our specialists’ top-rated trips and experiences that you can make your own.",
        link: "REQUEST THE BROCHURE",
    },
    {
        id: 5,
        title: "Inspiration for the responsible traveller",
        content:
            "Browse trips and tips for responsible travellers who wish to leave a positive impact on your next journey.",
        link: "RESPONSIBLE TRAVEL IDEAS",
    },
];

const SlideBig = () => {
    const [slide, setSlide] = useState(slides);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, slide]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    const handleClickPrev = () => {
        const slider =
            slide === slides[slides.length - 1] ? slides[0] : slides[slide];
        setSlide(slider)
        
        console.log(slide);
        console.log(slides[slide]);
        console.log(slider);
        console.log(slides[slides.length - 1])
    };

    const handleClickNext = () => {
        const lastSlide = slides[slides.length - 1];
        // const newSlide = lastSlide ? slides[0] : slides[1];

        // console.log(slides[1]);
    };

    const contentStyle = {
        height: "720px",
        color: "#fff",
        lineHeight: "700px",
        textAlign: "center",
        overFlow: "hidden",
    };

    return (
        <div className="slide-boder">
            <Carousel effect="fade" autoplay duration="5s">
                {slides.map((slide) => (
                    <div>
                        <div
                            style={contentStyle}
                            className="slide-item1 sli"
                        ></div>
                        <button
                            type="button"
                            className="btn-prev"
                            tabIndex="-1"
                            onClick={handleClickPrev}
                        >
                            <MdArrowBackIosNew className="carousel-icon--prev" />
                        </button>
                        <div className="title-wellcome" key={slide.id}>
                            <span className="slide-title">{slide.title}</span>
                            <p className="slide-content">{slide.content}</p>
                            <button className="slide-link">{slide.link}</button>
                        </div>
                        <button
                            type="button"
                            className="btn-next"
                            tabIndex="-1"
                        >
                            <MdArrowForwardIos
                                className="carousel-icon--next"
                                onClick={handleClickNext}
                            />
                        </button>
                    </div>
                ))}
            </Carousel>
        </div>
    );

    // return (
    //     <div className="slide-boder">
    //         {slides.map((indexSlide, slide) => {
    //             const { id, title, content, link } = slide;
    //             let position = "nextSlide";
    //             if (indexSlide === index) {
    //                 position = "activeSLide";
    //             }
    //             if (
    //                 indexSlide === index - 1 ||
    //                 (index === 0 && indexSlide === slides.length - 1)
    //             ) {
    //                 position = "lastSlide";
    //             }
    //             return (
    //                 <div>
    //                     <div
    //                         style={contentStyle}
    //                         className="slide-item1 sli"
    //                     ></div>
    //                     <button
    //                         type="button"
    //                         className="btn-prev"
    //                         tabIndex="-1"
    //                         onClick={handleClickPrev}
    //                     >
    //                         <MdArrowBackIosNew className="carousel-icon--prev" />
    //                     </button>
    //                     <div className="title-wellcome" key={slide.id}>
    //                         <span className="slide-title">{slide.title}</span>
    //                         <p className="slide-content">{slide.content}</p>
    //                         <button className="slide-link">{slide.link}</button>
    //                     </div>
    //                     <button
    //                         type="button"
    //                         className="btn-next"
    //                         tabIndex="-1"
    //                     >
    //                         <MdArrowForwardIos
    //                             className="carousel-icon--next"
    //                             onClick={handleClickNext}
    //                         />
    //                     </button>
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
};

export default SlideBig;
