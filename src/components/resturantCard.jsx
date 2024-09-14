const ResturantCard = ({ cloudinaryImageId,name,avgRating,cuisines }) => {
    return (
      <div className="border-2 rounded-xl bg-gray-300 border-gray-300 w-[250px] m-3 hover:border-gray-600">
        <img  className="w-[100%] max-h-[250px] rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Food Image" />
        <h1 className="font-bold text-lg text-center p-2">{name}</h1>    
        <span>
          <h3 className="text-md font-semibold p-2">{avgRating} <i className="fa-solid fa-star text-green-700  text-xl"></i> stars</h3>
        </span>
        <p className="font-semibold text-md">{cuisines.join(" ")}</p>
      </div>
    );
  };

export default ResturantCard;

  