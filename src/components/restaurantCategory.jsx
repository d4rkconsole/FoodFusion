import { Accordion } from "flowbite-react";
import ItemList  from "./ItemLists";

const RestaurantCategory = ({ data }) => {

    return (
        
        <Accordion className="m-10 shadow-lg" collapseAll>
                <Accordion.Panel>
                    <Accordion.Title className="text-xl text-black font-bold">{data?.title}  ({data?.itemCards?.length})</Accordion.Title>
                    <Accordion.Content>
                    {
                        data?.itemCards.map( (item,index) => {
                            return (
                                <ItemList key={index} data={item?.card?.info}/>
                            )   
                            
                        })
                    }                    
                </Accordion.Content>
                </Accordion.Panel>
        </Accordion>

        
    )

};
export default RestaurantCategory;
