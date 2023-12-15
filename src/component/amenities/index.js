import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Amenities({
    hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParking,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly,
    ...rest
}) {
    return (
        /* */
        
    <Box shadow className="properties">
        <div class="properties__header">
        <Heading>Зручності</Heading>
        
        </div>
        <List {...rest} />
        
    </Box>
    );
}

function List({hasPool, hasGym, hasFreeBreakfast, hasFreeWiFi, hasParking, hasPetsAllowed, hasAirportShuttle, hasConciergeService, hasRoomService, hasChildFriendly}) {
    return (
        <ul className="properties__list">
            <ListItem >
            <img src={"./hasPool.svg"} alt={" "} className="photo__guest"></img>
            
                <span>Басейн</span>
                <span>
                   
                {hasPool}
                </span>
            </ListItem>
            <ListItem>
            <img src={"./hasGym.svg"} alt={" "} className="photo__bedrooms"></img>
                <span>Спортивний зал</span>
                <span>
                  
                    {hasGym}
                </span>
            </ListItem>
            <ListItem>
            <img src={"./breakfast.svg"} alt={" "} className="photo__beds"></img>
                <span>Безкоштовний сніданок</span>
                <span>{hasFreeBreakfast}</span>
            </ListItem>
            <ListItem>
             <img src={"./wifi.svg"} alt={" "} className="photo__baths"></img> 
                <span>Безкоштовний Wi-Fi</span>
                <span>
                    {hasFreeWiFi}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./parking.svg"} alt={" "} className="photo__baths"></img> 
                <span>Безкоштовний вуличний паркінг</span>
                <span>
                    {hasParking}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./pets.svg"} alt={" "} className="photo__baths"></img> 
                <span>Дозволено розміщення з домашніми тваринами</span>
                <span>
                    {hasPetsAllowed}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./airport.svg"} alt={" "} className="photo__baths"></img> 
                <span>Трансфер до/з аеропорту</span>
                <span>
                    {hasAirportShuttle}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./concierge.svg"} alt={" "} className="photo__baths"></img> 
                <span>Консьєрж-сервіс</span>
                <span>
                    {hasConciergeService}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./service.svg"} alt={" "} className="photo__baths"></img> 
                <span>Обслуговування номерів</span>
                <span>
                    {hasRoomService}
                </span>
            </ListItem>
            <ListItem>
             <img src={"./child.svg"} alt={" "} className="photo__baths"></img> 
                <span>Підходить для дітей</span>
                <span>
                    {hasChildFriendly}
                </span>
            </ListItem>
        </ul>
    );
}