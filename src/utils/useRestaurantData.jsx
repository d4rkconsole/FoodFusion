import { useState, useEffect } from "react";
import {api} from "../config"

const useRestaurantData = () => {
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
            
            setloading(false);

        } catch (error) {
            console.log("unable to fetch the data from api", error);
        }
    }

    return [resData,loading];

};

export default useRestaurantData;
