import { useState , useEffect } from "react";
import { menu_api  } from "../config";

const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setresMenuInfo] = useState({});
    const [menulist,setmenulist] = useState([]);
    

    
    
    useEffect( () => {
        fetchMenu();
    },[resId])

    //console.log(resMenuInfo);
    console.log(menulist);


    
    async function fetchMenu() {
       try {
        const jsonData = await fetch(menu_api + resId);
        const data = await jsonData.json();
        //console.log(data);
        setmenulist(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
        

        setresMenuInfo(data?.data?.cards[2]?.card?.card?.info)  
        //setmenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards )
       } catch (error) {
        console.log("some erorr occured while fetching data from api", error)
    
       }
    }   
    return [resMenuInfo,menulist];
};

export default useRestaurantMenu;


