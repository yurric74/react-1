import { Fragment } from "react";
import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Attractions({list}) {
    return (
        <Box shadow className="attractions">
        
            <Heading>Пам'ятки поблизу</Heading>
    
            <div className="attractions__list">
                {list.map(({id,  ...rest}) => (
                    <Fragment key={id}>
                        <Item {...rest}/>
                    </Fragment>
                ))}
            </div>
       
        </Box>
        );
}

function Item({ name, link}) {
    return (
        <ul className="attractions">
            <ListItem>
            <span className="attractions__title">
                <a  href={link}>{name}</a>
            </span>
            </ListItem>
        </ul>
    );
}
