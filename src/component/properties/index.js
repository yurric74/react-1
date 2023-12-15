import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Properties({
    
    guests,
    bedrooms,
    beds,
    baths,
    ...rest
}) {
    return (
        /* */
        
    <Box shadow className="properties">
        <div class="properties__header">
        <   Heading>Деталі властивості:</Heading>
        </div>
        <List {...rest} />
        
    </Box>
    );
}

function List({guests=2, bedrooms=1, beds=1, baths=1}) {
    return (
        <ul className="properties__list">
            <ListItem >
                <img src={"./guest.svg"} alt={" "} className="photo__guest"></img>
                <span> гості:{guests}</span>
               
            </ListItem>
            <ListItem>
                <img src={"./bedrooms.svg"} alt={" "} className="photo__bedrooms"></img>
                <span>спальні:{bedrooms}</span>
                
            </ListItem>
            <ListItem>
                <img src={"./beds.svg"} alt={" "} className="photo__beds"></img>
                <span>ліжко:{beds}</span>
              
            </ListItem>
            <ListItem>
                <img src={"./baths.svg"} alt={" "} className="photo__baths"></img> 
                <span>ванна кімната:{baths}</span>
            </ListItem>
        </ul>
    );
}