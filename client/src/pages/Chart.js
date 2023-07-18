import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Chart({ donations }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!donations || donations.length === 0) return;

    const margin = { top: 30, right: 30, bottom: 150, left: 60 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Clear existing SVG content
    d3.select(svgRef.current).selectAll('*').remove();

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
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.amount))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.amount))
      .attr("fill", "#69b3a2");
  }, [donations]);

  return (
    <div>
      <h1>Bar Chart</h1>
      <div ref={svgRef}></div>
    </div>
  );
}

export default Chart;

// import React from 'react'
// import * as d3 from 'd3';
// import AxisBottom from './AxisBottom';

// function Chart({ donations }) {

//   const margin = { top: 0, right: 0, bottom: 0, left: 0 };
//   const width = 500 - margin.left - margin.right;
//   const height = 300 - margin.top - margin.bottom;

//   console.log(donations)

//   const scaleX = d3.scaleBand()
//     .domain(donations.map((d) => d.organization_name))
//     .range([0, width]);


//   return (
//     <div>
//       <h1>Donation Chart</h1>
//       <svg
//         // width={width + margin.left + margin.right}
//         // height={height + margin.top + margin.bottom}
//         width="500" height="300" style={{ border: "1px solid black" }}
//       >
//       <g transform={`translate(${margin.left}, ${margin.top})`}>
//         <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
//       </g>
//     </svg>
//     </div>

//   )
// }

// export default Chart;

      {/* <svg width={width} height={height}>
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          d={line(donations)}
        />
        <g fill="white" stroke="currentColor" stroke-width="1.5">
          {donations.map((d, i) => (
            <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
          ))}
        </g>
      </svg> */}

  // const x = d3.scaleLinear(
  //   [0, donations.length - 1],
  //   [marginLeft, width - marginRight]
  // );

  
  // const y = d3.scaleLinear(d3.extent(donations), [height - marginBottom, marginTop]);
  // console.log(`x: ${x}, y: ${y}`)
  // const line = d3.line((d, i) => x(i), y);