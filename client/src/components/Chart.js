import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


function Chart({ donations }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!donations || donations.length === 0) return;

    const margin = { top: 30, right: 30, bottom: 150, left: 60 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand()
      .range([0, width])
      .domain(donations.map(d => d.organization_name))
      .padding(0.2);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear()
      .domain([0, d3.max(donations, d => d.amount)])
      .range([height, 0]);

    svg.append("g")
      .call(d3.axisLeft(y));

    svg.selectAll("mybar")
      .data(donations)
      .enter()
      .append("rect")
      .attr("x", d => x(d.organization_name))
      .attr("y", d => y(d.amount))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.amount))
      .attr("fill", "#69b3a2");

    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, [donations]);

  return (
    <div>
      <h1>Your Donation Progress</h1>
      <div ref={svgRef}></div>
    </div>
  );
}

export default Chart;