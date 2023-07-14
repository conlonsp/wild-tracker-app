import React from 'react'
import * as d3 from 'd3';

function Chart({ donations }) {

  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  return (
    <div>
      <h1>Donation Chart</h1>
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
      <g transform={`translate(${margin.left}, ${margin.top})`}></g>
    </svg>
    </div>

  )
}

export default Chart;

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