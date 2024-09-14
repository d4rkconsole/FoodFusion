import { useEffect, useState } from "react";
import ResturantCard from "./resturantCard.jsx"
import { Link  } from "react-router-dom";
import useOnlineStatusCheck  from "../utils/useOnlineStatusCheck.jsx";
import {api} from "../config.js"
import ShimmerUi  from "./shimmerUI.jsx";


const filterData = (data,filter) => {
  const filterdata = data.filter( (data) => {
    return data?.info?.name?.toLowerCase()?.includes(filter)
  });
  return filterdata;
  
}

const Body = () => {
    const [filter, setfilter] = useState("");
    const [resfilterdata, setresfilterdata] = useState([]);
    const isOnline = useOnlineStatusCheck();

    
    const [resData, setResData] = useState([]);
    const [loading,setloading] = useState(true);
    


    useEffect( () => {
        fetchData();

    },[])
    
    async function fetchData() {
        try {
            const jsonData = await fetch(api);
            const data = await jsonData.json();


            setResData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setresfilterdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setloading(false);

        } catch (error) {
            console.log("unable to fetch the data from api", error);
        }
    }

    

    if(isOnline === false) {
      return <h1>You are not connected to Internet . Please Connect</h1>
    }
    

    if(loading) {
      return <ShimmerUi/>;
    }

    

    
    return  (
      <div>
      <div className="flex gap-2 justify-center">

      <input className="border-2 text-gray-600 border-indigo-500 p-3 m-4 w-[400px] rounded-xl text-lg font-bold hover:border-indigo-800" type="Search" placeholder="Search for a Restaurant you want ..." value={filter} onChange={ (event) =>  {
        setfilter(event.target.value)
      }}/>
      <button className="border-2 p-3 m-4 font-bold bg-green-700 rounded-lg w-[100px] hover:border-red-500" onClick={ () => {
        const newdata = filterData(resData,filter.trim());
        setresfilterdata(newdata);
        
      }}>Search</button>

      </div>
      <div className="flex flex-wrap gap-2">
        {
           resfilterdata && resfilterdata?.length === 0 ? (
            <div className="text-4xl font-bold text-red-700  p-4 m-2">Sorry We are Not able to find any restaurant with Name "{filter}"</div>
          ): ( resfilterdata?.map((data) => {
          return <Link to={"/restaurant/" + data.info.id} key={data.info.id}><ResturantCard {...data.info} key={data.info.id} /></Link>
        }))
        }
      </div>
      </div>
    );
};

export default Body;


