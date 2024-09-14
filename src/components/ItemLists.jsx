import {img_cdn_link} from "../config.js"


const ItemList = ({data}) => {
    
    return (
        <div className="flex flex-wrap border bg-gray-700  rounded-2xl w-[80%] my-5 m-auto" key={data?.id}>
            <div className="m-2 ">
                <img className="w-[190px]  h-[150px] rounded-xl" src={ img_cdn_link + data?.imageId} alt="Food Image"/> 
            </div>
            <div className="m-3 p-3">
                <h1 className="font-serif text-2xl text-black my-5">{data?.name}</h1>
                <h2 className="text-lg font-bold text-black">₹ {data?.price/100 || data?.defaultPrice/100} </h2>
            </div>
            <div>
                <p className="m-3 p-2 text-lg text-white font-mono">{data?.description}</p>
            </div>
            
            
                    
        </div>
    )
};

export default ItemList;

