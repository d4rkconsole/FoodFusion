import { useEffect, useState } from "react";

const useOnlineStatusCheck = () => {
    const [isOnline,setisOnline] = useState(true);

    useEffect( () => {
        
        checkNetworkConnectivity();

    },[])

    const checkNetworkConnectivity = async () =>{
        try {
            const response = await fetch("https://www.google.com", {method:"HEAD",mode:"no-cors"});
            setisOnline(true)
        } 
        catch (error) {
            setisOnline(false);
        }

    }

    return isOnline;

};

export default useOnlineStatusCheck;
