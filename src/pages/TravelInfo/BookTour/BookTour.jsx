import React from "react";
import "./style.css";
import { Button, Radio } from "antd";
import { DatePicker, Space } from "antd";
import Input from "../../../components/Input/Input";
import { useState, useEffect } from "react";
import axios from 'axios';
import qs from "qs";
import { toast } from 'react-toastify';
import "antd/dist/antd.css";
import { nonNegativeInteger } from "airbnb-prop-types";

const BookTour = ({ onClick, status ,data ,htl,paxl,user}) => {
  const onChangeDate = (date, dateString) => {
    // console.log(date, dateString);
  };

  const [Bookinfor, setBookinfor] = useState({
    UserName: user.UserName,
    TourCode: data.TourCode,
    FullName: "",
    Email: "",
    Phone: "",
    StartDate: "",
    Date: new Date(),
    Status: "Prepare",
    Adult: 1,
    Children: 0,
    Note: "",
    Price: '',
    Hotel:htl[0]
  });
  let Numberc= Number(Bookinfor.Adult)+Number(Bookinfor.Children);
  // let Paxpick = paxl.find(d=>d.includes(`${Numberc}`));
  // console.log(Paxpick);
  // if (Paxpick.length==0){Paxpick=paxl}
  // (Numberc > Number(paxl[paxl.length-1].split('PAX')[0])) {const Paxpick=paxl[paxl.length-1]}
  // else { Paxpick = paxl.find(d=>d.includes(`${Numberc}`))}
  console.log(Numberc);
  let CostNumber = data.PRICE.filter(d=>(JSON.parse(d.TourItems).Pax[0].includes(String(Numberc))));
  console.log(['1,2'][0].includes('1'));
  
  if(CostNumber.length==0){CostNumber=data.PRICE.filter(d=>JSON.parse(d.TourItems).Title==paxl[paxl.length-1])};
  console.log(data.PRICE);
  console.log(CostNumber);
  const Cost = (CostNumber.find(d=>JSON.parse(d.TourItems).Hotel==Bookinfor.Hotel));
  console.log(Cost);
  const handleSubmit = (e) => {
    e.preventDefault();
    callApi();
    callApiSendmail();
    console.log(Bookinfor);
  };
  ////Call thêm booking
  const callApi = async () => {

    const response = await axios({
        method: "post",
        url: "https://backend.vnxpedia.com/TravelAPI/InsertBooking",
        data: qs.stringify({
          UserName: user.UserName,
          TourCode: data.TourCode,
          FullName: Bookinfor.FullName,
          Email: Bookinfor.Email,
          Phone: Bookinfor.Phone,
          StartDate: Bookinfor.StartDate,
          Date: new Date(),
          Status: "Prepare",
          Adult: Bookinfor.Adult,
          Children: Bookinfor.Children,
          Note: Bookinfor.Note,
          Price: Cost.price,
        }),
        headers: {
            "content-type":
                "application/x-www-form-urlencoded;charset=utf-8",
        },
    });

    if (response.status === 200) {
        
        toast.success(' Inquire complete!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          console.log(response);
    } else alert("Invaild infor");
};
const callApiSendmail = async () => {

  const response = await axios({
      method: "post",
      url: "https://backend.vnxpedia.com/TravelAPI/SendMailCustom",
      data: qs.stringify({
          header: `You inquiried new travel from VNXpedia`,
          content: `Tour name: ${data.TourName}`,
          mail : Bookinfor.Email,
      }),
      headers: {
          "content-type":
              "application/x-www-form-urlencoded;charset=utf-8",
      },
  });
};

  

  return (
    <div className="book-container" style={{ display: `${status}` }}>
      <form className="book-form" onSubmit={(e) => handleSubmit(e)}>
      <p className="close-form" onClick={onClick}>
          RETURN TO TRIP PAGE
        </p>
        <h1 className="h1-book">Booking your Trip</h1>

        <div className="body-form-book">
          <p>
            Fill out the form below to receive a detailed itinerary for this
            trip. Please note: While we try to share the most accurate itinerary
            with you, these are sometimes subject to change and should not be
            treated as final.
          </p>
          <div className="item-form">
            <label className="label-booking">Full Name *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-fullname"
              type="name"
              name="email "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, FullName: e.target.value })
              }
            />
          </div>
          <div className="item-form">
            
            <label className="label-booking">Email *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-email"
              type="email"
              name="email "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Email: e.target.value })
              }
            />
          </div>
          <div className="item-form">
            
            <label className="label-booking" id="inp">
              Phone Number *
            </label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-phone"
              type="phone"
              name="phone "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Phone: e.target.value })
              }
            />
          </div>
          <div className="item-form">  
            <label className="label-booking">Departure Date *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-date"
              type="date"
              name="phone "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, StartDate: e.target.value })
              }
            />
          </div>

          <div className="item-form">  
            <label className="label-booking">HOTEL PAX*</label>
            <select onChange={(e)=>setBookinfor({...Bookinfor,Hotel:e.target.value})} name="hotel" id="hotels" style={{border:'none', borderBottom: "1px solid #e5e5e5" }}>
               {htl.map(d=><option value={d}>{d}</option>)}
                
               
            </select>
            </div>

          <div className="item-form ">
            <div id="adult-children1" className="">
              <label className="label-booking">
                Adult: </label>
                <input
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                  id="inp-adult"
                  type="number"
                  name="phone "
                  onChange={(e) =>
                    setBookinfor({ ...Bookinfor, Adult: e.target.value })
                  }
                />
             
            </div>
            <div id="adult-children2">
           
              <label className="label-booking label-width-children">
                Children:</label>
                <input
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                  id="inp-adult"
                  type="number"
                  name="phone "
                  onChange={(e) =>
                    setBookinfor({ ...Bookinfor, Children: e.target.value })
                  }
                />
              
            </div>
          </div>
          <p>Total cost: {Cost.price}$</p>
          <div className="item-form note-div">
            <label className="label-note">Customize your trip :</label>
            <textarea
              className="text-area-booking"
              placeholder="Change your destination, services, other requests"
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Note: e.target.value })
              }
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>{" "}
          </div>
        </div>


      </form>
    </div>
  );
};

export default BookTour;