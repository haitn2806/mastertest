import React from "react";
import IMG from "../../data/images/maldives3.jpg";
import "./style.css";
import { useState, useContext, useEffect } from "react";
import Data from "../../data/tourlist.json";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import TourItemlist from "../../components/TourItemlist/TourItemlist";
import { UserContext } from "../../components/Layout";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { FaDivide, FaLess } from "react-icons/fa";
import { Button, Radio } from "antd";
import { RiEdit2Fill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { DatePicker, Space } from "antd";
import TourTable from "./TourTable/TourTable";
import "antd/dist/antd.css";
import { CgProfile } from "react-icons/cg";
import { BsBell, BsStars, BsBookmarkStar } from "react-icons/bs";
import EditTour from "./EditTour/EditTour";
import Crumb from "../../components/Crumb/Crumb";
import BillEdit from "../BillDetail/BillEdit";
import BillDetail from "../BillDetail/BillDetail";
import axios from 'axios';
import qs from "qs";


const UserInfor = () => {
 

  /////////// Gọi API cho User 
  const [Bookdata, setBookdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
   
  const CallApi =async()=>{
    setIsLoading(true);

     const response = await axios({
         method: 'post',
         url: `https://backend.vnxpedia.com/TravelAPI/BookingTable?UserName=${currentUser.UserName}`,
         type: 'json'
     });

     if(response.status === 200){
         setBookdata(response.data.Object)
     }
     setIsLoading(false);     
    }
    console.log(Bookdata);

 
 ///////// Khởi chạy trang web sẽ đặt Profile hiển thị đầu tiên , call API
 useEffect(()=>{
   CallApi();
   ShowAttiribute('Profile');
   let VNXuser = localStorage.getItem("VNXUser")
      ? JSON.parse(localStorage.getItem("VNXUser"))
      : null;
    if (VNXuser) {
      setCurrentUser(VNXuser);
    } else {
      setCurrentUser(null);
    }
 },[]);

 /////// Đây là crumber :
  const [datalink,setlink] = useState([
    'Home'
    ,
    'User'
    ,
    'Profile'
  ]);
  
  const [showattribute, setshowatt] = useState(1);
  const [pass, setpass] = useState("********");
  const ShowAttiribute = (a) => {
    setshowatt(a);
    setlink([
      'Home'
      ,
      'User'
      ,
      `${a}`
    ])
  };
  const Showpass = () => {
    {
      pass == "********" ? setpass(123456) : setpass("********");
    }
  };

  


  // Edit per value profile
  const [editname, setname] = useState(false);
  const EditName = () => {
    {
      editname ? setname(false) : setname(true);
    }
  };
  const [editgender, setgender] = useState(false);
  const EditGender = () => {
    {
      editgender ? setgender(false) : setgender(true);
    }
  };
  const [editbday, setbday] = useState(false);
  const EditBday = () => {
    {
      editbday ? setbday(false) : setbday(true);
    }
  };
  const [editaddress, setadd] = useState(false);
  const EditAddress = () => {
    {
      editaddress ? setadd(false) : setadd(true);
    }
  };
  const [editphone, setphone] = useState(false);
  const EditPhone = () => {
    {
      editphone ? setphone(false) : setphone(true);
    }
  };
  const [editemail, setemail] = useState(false);
  const EditEmail = () => {
    {
      editemail ? setemail(false) : setemail(true);
    }
  };
  const [editpassword, setpassword] = useState(false);
  const EditPass = () => {
    {
      editpassword ? setpassword(false) : setpassword(true);
    }
  };
  const [editabout, setabout] = useState(false);
  const EditAbout = () => {
    {
      editabout ? setabout(false) : setabout(true);
    }
  };
 
  const [billd,setbilld] = useState('hidden');
  const [bille,setbille] = useState('hidden');
  const [tourbill,settourbill] = useState(null);

  const ShowbillDetail = (d) => {
    billd=='show'?setbilld('hidden'):setbilld('show');
    settourbill(d);
  }
  const ShowbillEdit = (d) => {
    bille=='show'?setbille('hidden'):setbille('show');
    settourbill(d);
  }
  const CloseAll = () => {
    setbilld('hidden');
    setbille('hidden');
  }
  
  ////////user form infor
  const [Useredit,setUseredit] = useState(currentUser);
  const onChangeDate = (date, dateString) => {
    console.log(dateString);
    setUseredit({...Useredit,BirthDay:dateString});
  };
  const [value, setValue] = useState(true);
  const onChangeGender = (e) => {
    setValue(e.target.value);
    setUseredit({...Useredit,Gender:e.target.value});
  };
  const SubmitEdit = () => {
    console.log(Useredit);
    callApiEdit();
  }
  const callApiEdit = async () => {

    const response = await axios({
        method: "post",
        url: "https://backend.vnxpedia.com/TravelAPI/UpdateInfo",
        data: qs.stringify({
            UserName:currentUser.UserName,
            GivenName:Useredit.FullName,
            Gender:Useredit.Gender,
            Reason:Useredit.BirthDay,
            Description:Useredit.About,
            Note:Useredit.Address,
            PhoneNumber:Useredit.PhoneNumber,
            Email:Useredit.Email
        }),
        headers: {
            "content-type":
                "application/x-www-form-urlencoded;charset=utf-8",
        },
    });
    console.log(Useredit);
    console.log(currentUser.UserName);
};
const editPicture = () => {
  
}

  return (
    <div>
      <div className="bannner">
        <img className="banner-img" src={IMG}></img>
      </div>

     
      
      <div className="user-main-infor">
        <div className="list-attribute">
        <div className="user-main">
          {/* {currentUser.Picture?
          <img
          className="user-img"
          alt=""
          src={currentUser.Picture}
        ></img>: */}
        <img
        className="user-img"
        alt=""
        src='https://media.defense.gov/2018/Sep/21/2002043408/1088/820/0/180921-D-BD104-006.JPG'
      ></img>
      {/* }  */}
        
        <RiEdit2Fill className="edit-picture" onClick={()=>editPicture()}/>
      </div> 

          <Button onClick={() => ShowAttiribute('Profile')}>
            <CgProfile className="icon-profile icon-att" />
            Profile
          </Button>
          <Button onClick={() => ShowAttiribute('Notifications')}>
            <div className="div-noti">
              <BsBell className="icon-noti icon-att"></BsBell>
              <p className="num-noti">4</p>
            </div>
            Notifications
          </Button>
          <Button onClick={() => ShowAttiribute('Booking list')}>
            <BsBookmarkStar className="icon-booking icon-att" />
            Booking list
          </Button>
          <Button onClick={() => ShowAttiribute('Wish list')}>
            <BsStars className="icon-wish icon-att" />
            Wish list
          </Button>
        </div>
        <div className="infor-attribute">

          <Crumb data={datalink}/>

          {showattribute == 'Profile' && (
            <div className="user-profile">
              <div className="user-infor-container">
                <div className="user-infor-main">
                  <h1>Profile Information</h1>
                  <div className="edit-item">
                    <p>
                      Name :{" "}
                      {editname ? (
                        <input
                          placeholder={currentUser.FullName}
                          className="edit-input" onChange={(e)=>setUseredit({...Useredit,FullName:e.target.value})}
                        ></input>
                      ) : (
                        `${currentUser.FullName}`
                      )}
                      <RiEdit2Fill onClick={() => EditName()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Gender :{" "}
                      {editgender ? (
                        <Radio.Group
                          onChange={onChangeGender}
                          value={value}
                          className="input-2"
                        >
                          <Radio value={true}>Male</Radio>
                          <Radio value={false}>Female</Radio>
                        </Radio.Group>
                      ) : (
                        "Male"
                      )}{" "}
                      <RiEdit2Fill onClick={() => EditGender()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Birthday :{" "}
                      {editbday ? (
                        <DatePicker onChange={onChangeDate} picker='date' className="input-2" />
                      ) : (
                          currentUser.BirthDay
                      )}
                      <RiEdit2Fill onClick={() => EditBday()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Address :{" "}
                      {editaddress ? (
                        <input onChange={(e)=>setUseredit({...Useredit,Address:e.target.value})}
                          placeholder=''
                          className="edit-input"
                        ></input>
                      ) : (
                        ''
                      )}
                      <RiEdit2Fill onClick={() => EditAddress()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Phone :{" "}
                      {editphone ? (
                        <input onChange={(e)=>setUseredit({...Useredit,PhoneNumber:e.target.value})}
                          placeholder={currentUser.PhoneNumber}
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.PhoneNumber
                      )}
                      <RiEdit2Fill onClick={() => EditPhone()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Email :{" "}
                      {editemail ? (
                        <input onChange={(e)=>setUseredit({...Useredit,Email:e.target.value})}
                          type="email"
                          placeholder={currentUser.Email}
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.Email
                      )}
                      <RiEdit2Fill onClick={() => EditEmail()} />
                    </p>
                  </div>
                  {/* <div className="edit-item">
                    <p>
                      Password :{" "}
                      {editpassword ? (
                        <input
                          type="password"
                          placeholder="password"
                          className="edit-input"
                        ></input>
                      ) : (
                        `*********`
                      )}{" "}
                      <AiOutlineEye
                        className="user-icon1"
                        onClick={() => Showpass()}
                      />
                      <RiEdit2Fill onClick={() => EditPass()} />
                    </p>
                  </div> */}
                </div>
                <div className="about-me">
                  <h1>About me</h1>
                  <p>
                      {editabout ? (
                        <input onChange={(e)=>setUseredit({...Useredit,About:e.target.value})}
                          type="text"
                          placeholder={currentUser.About}
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.About
                      )}
                    {/* Very handsome but no have money T_T{" "} */}
                    <RiEdit2Fill onClick={() => EditAbout()} />
                  </p>
                </div>
              </div>
              <button className="btn-active" onClick={()=>SubmitEdit()}>Save</button>
              <button className="btn-active" style={{marginLeft:'10px'}}>Change Password</button>
            </div>
          )}

          {showattribute == 'Booking list' && (
            <div className="user-booking">

              <TourTable edit={ShowbillEdit} print={ShowbillDetail}  data={Bookdata}/>
            </div> 
          )}

          {showattribute == 'Notifications' && (
            <div className="notification">
              <p>You don't have any notifications</p>
            </div>
          )}

          {showattribute == 'Wish list' && (
            <div className="wwish">
              <p>You don't have any wish</p>
            </div>
          )}
        </div>
      </div>
      
      {tourbill!==null &&<div>
      <div className={`bill-container bc1 ${bille}`}>
      <BillEdit close={CloseAll} data={tourbill}/>
      </div>
      <div className={`bill-container bc2 ${billd}`}>
      <BillDetail close={CloseAll} data={tourbill}/>
      </div></div>}

    </div>
  );
};

export default UserInfor;