import Logo from "../assets/logo.png"
import { Link  } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl m-1 p-4 font-serif text-center">About Us</h1>
            <p className="font-semibold text-3xl m-2 p-4 font-sans text-red-600 text-center">We deliver the tasty food at the affordable price to our Users</p>
            <Link to="/"><button className="border-2 bg-green-700 rounded-lg m-4 p-3 ml-[600px]">Back to Home</button></Link>
        </div>
    )
};

export default AboutUs;
