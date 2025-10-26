import { Link } from "react-router-dom";
const CardV3 = ({ itemId, itemName, itemDescription, itemCost, itemImage }) => (
    <div class="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
        <img src={itemImage} class="card-img-top" alt={"Image of" + itemName} />
        <div class="card-body">
            <h5 class="card-title">{itemName}</h5>
            <p class="card-text">{itemDescription}</p>
            <p class="card-text">{itemCost}</p>
            <Link to={"/Products/" + itemId} className="btn btn-primary">View Detail</Link>
        </div>
    </div>
)
export default CardV3