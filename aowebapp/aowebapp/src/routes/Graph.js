import React, { useState, useEffect } from "react";
export default function Graph() {
    const [rngNumber, setRngNumber] = useState(0);
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 20;
    const timeOut = 500;
    const maxValue = 60;

    useEffect(() => {
        const interval = setInterval(() => {
            setRngNumber(Math.floor(Math.random() * maxValue));
        }, timeOut);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let tempArray = [...rngArray, rngNumber];
        if (tempArray.length > maxItems) {
            tempArray.shift(); 
        }
        setRngArray(tempArray);
        // console.log(rngArray);
    }, [rngNumber]);

    return (
        <div className="App container">
            <h1>
                RNG Output: {rngNumber}
            </h1>
            <div className="row">
                <svg
                    width="100%"
                    height="600px"
                    className="border border-primary rounded p-2"
                ></svg>
            </div>
        </div>
    );
}
