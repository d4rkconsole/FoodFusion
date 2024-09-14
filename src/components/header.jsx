import { useState } from "react";
import Applogo from "../assets/logo.png";
import { Link  } from "react-router-dom";
import useOnlineStatusCheck  from "../utils/useOnlineStatusCheck";


const Logo = () => {
  return (
    <a href="/">
      <img  className="w-[150px]" src={Applogo} alt="Food Fusion" id="logo" />
    </a>
  );
};
const Header = () => {
  
  const isOnline = useOnlineStatusCheck();
  const [btn, setbutton] = useState(false);

  

  return (
    <div className="flex justify-between">
      <Logo />
      
      <div>
        
        <ul className="flex justify-between gap-12 m-12 flex-wrap font-bold text-lg"> 
        <li>Online Status  : {(isOnline === true) ? "🟢" : "🔴"} </li>
        
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About Us</li>
        </Link>
    
        <Link to="/contact">
        <li>Contact US</li>
        </Link>
       
        <i  className="fa-solid fa-cart-shopping fa-xl p-3"></i>
        {
          (btn === true) ? <button className="border hover:border-red-600 rounded-md px-3  text-white bg-green-700 font-sans" onClick={ () =>  {
            setbutton(false);
            
            

          }}>Logout</button> : <button className="border-2 px-3 hover:border-red-600 rounded-md  text-white bg-green-700 font-sans" onClick={ () => {
            setbutton(true);
            setalertMessage(true);

            
            
          }}>Login</button>
        }
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
