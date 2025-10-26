import CardV3 from "./CardV3"
import { useEffect, useState } from 'react'

function CardListSearch() {

    const [cardData, setState] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        console.log("Component Load useEffect()")
        fetch(`http://localhost:5210/api/ItemsWebAPI?searchText=${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [query]);

    function searchQuery(evt) {

        const value = evt.target.value;
        //const value = document.querySelector('[name="searchText"]').value;
        setQuery(value);
    }
    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        console.log("FormData: " + formData.get("searchText"))
        setQuery(formData.get("searchText"))
    }

    return (
        <div className="cardListSearch">
            <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" />
                </div>
                <div className="col-3 text-left">
                    <button type="submit" value={searchQuery}>Search</button>
                </div>
            </form>
            <div id="cardList" className="card-list">
                {cardData.map((obj) => (
                    <CardV3
                        key={obj.itemId}
                        itemId={obj.itemId}
                        itemName={obj.itemName}
                        itemDescription={obj.itemDescription}
                        itemCost={obj.itemCost}
                        itemImage={obj.itemImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardListSearch

