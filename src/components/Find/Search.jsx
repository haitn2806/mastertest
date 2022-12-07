import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.css";
import Datepicker from "../DatePicker/Datepicker";

const Search = ({ id }) => {
    return (
        // <div className='search-container' id={id}>
        //    <form className='search-main'>
        //     <div className='search-area'>
        //         <ImLocation2 className='icons'/>
        //         <input className='search-input' placeholder='Viet Nam'/>
        //         <MdOutlineMyLocation className='icons'/>
        //     </div>
        //     <hr className='line'/>
        //     <div className='date-pick'>
        //         <BsCalendar className='icons'/>
        //         <Datepicker className='date-in' placeholder='Start Date'/>
        //         -
        //         <Datepicker className='date-out' placeholder='End Date'/>
        //     </div>
        //     <hr className='line'/>
        //     <div className='pick-number'>
        //         <BsFillPeopleFill className='icons'/>
        //         <button className='number-p'>Guest : 1</button>
        //     </div>
        //     <button type='submit' className='submit'>Find tour</button>
        //    </form>
        // </div>

        <div className="search-container" id={id}>
            <BiSearchAlt className="search-icon"/>
            <input
                className="search-text"
                type="text"
                placeholder="Search your travel tour"
            />
        </div>
    );
};

export default Search;
