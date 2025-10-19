import './App.css';
import Card from './components/Card'
import CardV2 from './components/CardV2'
import CardV3 from './components/CardV3'
import CardList from './components/CardList'


function App() {
    return (
        <div className="App container">
            <div className="bg-light py-1 mb-2">
                <h2 className="text-center">Example Application</h2>
            </div>
            <div className="row justify-content-center">
                <Card itemID="1"
                    itemName="test record1"
                    itemDescription="test record1 DESC"
                    itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                    itemCost='15.00'
                />
                <CardV2 itemID="2"
                    itemName="test record2"
                    itemDescription="test record2 DESC"
                    itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                    itemCost='10.00'
                />
                <CardV3 itemID="3"
                    itemName="test record3"
                    itemDescription="test record3 DESC"
                    itemImage="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
                    itemCost='5.00'
                />
                <CardList></CardList>


            </div>

        </div>
    );
}

export default App;