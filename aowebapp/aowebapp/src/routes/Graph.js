import React, { useState, useEffect } from "react";
import * as d3 from "d3";
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

    useEffect(() => {
        const svg = d3.select("svg");
        svg.selectAll("*").remove();

        let w = svg.node().getBoundingClientRect().width;
        let h = svg.node().getBoundingClientRect().height;
        const barMargin = 10;
        const barWidth = w / rngArray.length;

        let yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        let barGroups = svg.selectAll("g")
            .data(rngArray);

        let newBarGroups = barGroups.enter()
            .append("g")
            .attr("transform", (d, i) => {
                return `translate(${i * barWidth}, ${yScale(d)})`;
            });

        newBarGroups
            .append("rect")
            .attr("x", 0)
            .attr("height", d => { return h - yScale(d); })
            .attr("width", barWidth - barMargin)
            .attr("fill", "black");
    }, [rngArray]);


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
