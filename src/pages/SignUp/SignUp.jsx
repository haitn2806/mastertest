import "./SignUp.css";
import SignUpGG from "./SignUpGG/SignUpGG";
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";
import {useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import qs from "qs";

function SignUp() {
  
  const navigate = useNavigate();
  const [User,setUser] = useState({
    UserName: "",
    GivenName:'',
    Email:'',
    PhoneNumber:'',
    Password: "",
    Passwordagain:'',
    Gender:'',
  });
   
const handleSubmit = (e) => {
  e.preventDefault();
  if ((User.UserName=='')||(User.GivenName=='')||(User.Email=='')||(User.Password=='')||(User.Passwordagain=='')||(User.Gender=='')) {
    toast.error(' Please fill to infor!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else {
  if( User.Password!== User.Passwordagain) 
  {
    toast.error(' Password again not correct!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }
   else 
   {
    callApi();
  };
}
  console.log(User);
}
////Call thêm booking 
const callApi = async () => {

  const response = await axios({
      method: "post",
      url: "https://backend.vnxpedia.com/TravelAPI/InsertAccount",
      data: qs.stringify({
          UserName: User.UserName,
          Password: User.Password,
          GivenName:User.GivenName,
          Email:User.Email,
          PhoneNumber:User.PhoneNumber,
          Picture:User.Picture,
          Gender:User.Gender
      }),
      headers: {
          "content-type":
              "application/x-www-form-urlencoded;charset=utf-8",
      },
  });
  console.log(response);
  
  if (response.data.Error ) {
      
      toast.error(' User exist!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
       
  } else { toast.success(' Create account complete!', {
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
    navigate("/LogIn", { replace: true });
  }
};


  return (
    <div className="wrapper">
      <div className="sign-up">
        <form  className="form-signup" id="form-1" onSubmit={(e)=>handleSubmit(e)}>
          <h3 className="heading">Create new Account</h3>
          <p className="desc">Hi My Friends</p>
          <div className="spacer"></div>
          <div className="form-group">
            <label for="username" className="form-label">
              User name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="VD: Nguyen A"
              className="form-control"
            onChange={(e)=>setUser({...User,UserName:e.target.value})}/>
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="fullname" className="form-label">
              Full name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="VD: Nguyen A"
              className="form-control"
            onChange={(e)=>setUser({...User,GivenName:e.target.value})}/>
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="mail" className="form-label">
              Email
            </label>
            <input
              id="mail"
              name="mail"
              type="text"
              placeholder="VD: NguyenA@gmail.com"
              className="form-control"
              onChange={(e)=>setUser({...User,Email:e.target.value})}
            />
            <span className="form-message"></span>
            </div>
            <div className="form-group">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="VD: NguyenA@gmail.com"
              className="form-control"
              onChange={(e)=>setUser({...User,PhoneNumber:e.target.value})}
            />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e)=>setUser({...User,Password:e.target.value})}
            />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password_confirmation" className="form-label">
              Password Again
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="form-control"
              onChange={(e)=>setUser({...User,Passwordagain:e.target.value})}
            />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="gender" className="form-label">
              Sex
            </label>
            <div className="form-sex">
              <div className="sex">
                <label className="sex-m" for="">
                  Male
                </label>
                <input
                  name="gender"
                  type="radio"
                  value="true"
                  className="form-control"
                  onClick={(e)=>setUser({...User,Gender:e.target.value})}
                />
              </div>
              <div className="sex">
                <label className="sex-m" for="">
                  Female
                </label>
                <input
                  name="gender"
                  type="radio"
                  value="false"
                  className="form-control"
                  onClick={(e)=>setUser({...User,Gender:e.target.value})}
                />
              </div>
              
            </div>
            <span className="form-message"></span>
          </div>
          {/* <SignUpGG /> */}
          <button className="form-submit" type='submit'>Sign Up</button>
          <div className="spacer"></div>
          <Link to='/' className="go-home">Go to home page</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;