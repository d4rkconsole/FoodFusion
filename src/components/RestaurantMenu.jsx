import { useParams } from "react-router-dom";
import { img_cdn_link } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./restaurantCategory";



const RestaurantMenu = () => {

    const { resId } = useParams();
    const [resdata,menulist] = useRestaurantMenu(resId);
    

    const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } = resdata


    return (
        <div>
            <div className="flex flex-wrap  bg-gray-800 w-[80%] rounded-xl  ml-24 text-white">
                <div>
                    <img className="w-[250px] h-[200px]  rounded-2xl m-1 p-2 " src={img_cdn_link + cloudinaryImageId} alt="Food Image" />
                </div>
                <div>
                    <h2 className="text-3xl m-2 p-2">{name}</h2>
                    <h3 className="text-lg m-1 text-gray-400">{cuisines?.join(",")}</h3>
                    <h2 className="text-xl m-2">Cost for Two :  {costForTwo / 100}</h2>
                    <h3 className="text-2xl m-2"><i className="fa-solid fa-star text-green-600"></i>  {avgRating}</h3>
                </div>
            
            </div>
            {
                menulist?.map( (category,index) => {
                    return ( 
                        <RestaurantCategory key={index} data={category?.card?.card}/>
                    )
                })
            }

            
        </div>

    )
};

export default RestaurantMenu;
