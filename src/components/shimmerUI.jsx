const ShimmerUi = () => {

    return (
        <div>
            {Array(20).map( () => {
                return <div className="h-[350px] bg-gray-600"></div>;
            })}
            
        </div>
        
    )
};

export default ShimmerUi;
