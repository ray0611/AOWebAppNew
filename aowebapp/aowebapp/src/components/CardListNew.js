import React, { useState } from 'react'
import CardV3 from './CardV3'
//import cardData from "../assets/itemData.json"

const CardListNew = ({ }) => {
    const [cardData, setState] = useState([]);
    React.useEffect(() => {
        fetch("http://localhost:5226/api/ItemsWebAPI?SearchText=${query}")
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [])
    return (
        <div className="card-list">
            {cardData.map((obj) => (
                <CardV3
                    key={obj.itemId}
                    itemId={obj.itemId}
                    itemName={obj.itemName}
                    itemDescription={obj.itemDescription}
                    itemCost={obj.itemCost}
                    itemImage={obj.itemImage}
                />

            )
            )
            }
        </div>
    )

}
export default CardListNew

