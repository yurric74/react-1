import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Addition({
    house_rules,
    cancellation_policy,
    local_transportation,
    host_languages,
    special_offers,
    ...rest
}) {
    return (
        /* */
        
    <Box shadow className="addition">
        <div class="addition__header">
        <Heading>Додаткові властивості</Heading>
        
        </div>
        <List {...rest} />
        
    </Box>
    );
}

function List({house_rules, cancellation_policy, local_transportation, host_languages, special_offers}) {
    return (
        <ul className="addition__list">
            <ListItem >
                <span className="addition__value"> Правила дому </span>
                <span>{house_rules}</span>
            </ListItem>
            <ListItem>
                <span className="addition__value">Політика скасування</span>
                <p>{cancellation_policy}</p>
            </ListItem>
            <ListItem>
                <span className="addition__value">Місцевий транспорт{local_transportation}</span>
                <p></p>
            </ListItem>
            <ListItem>
                <span className="addition__value">Мови хоста</span>
                <p>{host_languages}</p>
            </ListItem>
            <ListItem>
                <span className="addition__value">Спеціальні пропозиції:</span>
                <p>{special_offers}</p>
            </ListItem>
        
        </ul>
    );
}