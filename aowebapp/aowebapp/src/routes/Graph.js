import React, { useState, useEffect } from "react";
import * as d3 from "d3";
export default function Graph() {
    const [rngNumber, setRngNumber] = useState(0);
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 50;
    const timeOut = 100;
    const maxValue = 1;

    useEffect(() => {
        const interval = setInterval(() => {
            let val = Math.random();
            setRngNumber(
                `3/8 -> 7/16: note:d4 s:supersaw cutoff:300 attack:0 decay:0 sustain:0.5 release:0.1 room:0.6 lpenv:3.3 gain:${val} duration:0.10714285714285714 background-color: black; color:white; border-radius:15px`
            );
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

    function LogToNum(input) {
        if (!input) return 0;
        var stringArray = input.split(/(\s+)/);
        for (const item of stringArray) {
            if (item.startsWith("gain:")) {
                let val = item.substring(5);
                return Number(val);
            }
        }
        return 0;
    }


    useEffect(() => {
        const svg = d3.select("svg");
        svg.selectAll("*").remove();

        let w = svg.node().getBoundingClientRect().width;
        w = w - 40;
        let h = svg.node().getBoundingClientRect().height;
        h = h - 25;
        const barMargin = 10;
        const barWidth = w / rngArray.length;

        // Create yScale
        let yScale = d3
            .scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        // Translate the Bars to make room for axis
        const chartGroup = svg
            .append("g")
            .classed("chartGroup", true)
            .attr("transform", "translate(30,3)");

    //    let barGroups = chartGroup.selectAll("g").data(rngArray);

    //    // Add groups
    //    let newBarGroups = barGroups
    //        .enter()
    //        .append("g")
    //        .attr("transform", (d, i) => {
    //            return `translate(${i * barWidth}, ${yScale(d)})`;
    //        });

    //    // Draw me some rectangles
    //    newBarGroups
    //        .append("rect")
    //        .attr("x", 0)
    //        .attr("height", (d) => {
    //            return h - yScale(d);
    //        })
    //        .attr("width", barWidth - barMargin)
    //        .attr("fill", "black");

    //    // Add yAxis to chartGroup
    //    let yAxis = d3.axisLeft(yScale);
    //    chartGroup
    //        .append("g")
    //        .classed("axis y", true)
    //        .call(yAxis);
        //}, [rngArray]);

        let yAxis = d3.axisLeft(yScale);
        chartGroup.append("g").classed("axis y", true).call(yAxis);
        chartGroup
            .append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", 0)
            .attr("y2", yScale(maxValue))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "green" },
                { offset: "100%", color: "red" },
            ])
            .enter()
            .append("stop")
            .attr("offset", (d) => d.offset)
            .attr("stop-color", (d) => d.color);

        chartGroup
            .append("path")
            .datum(rngArray.map((d) => LogToNum(d)))
            .attr("fill", "none")
            .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 1.5)
            .attr(
                "d",
                d3
                    .line()
                    .x((d, i) => i * barWidth)
                    .y((d) => yScale(d))
            );
    }, [rngArray]);

    return (
        <div className="App container">
            <h1>RNG Output: {rngNumber}</h1>
            <div className="row">
                <svg width="600px" height="600px" className="border border-dark"></svg>
            </div>
        </div>
    );
}
