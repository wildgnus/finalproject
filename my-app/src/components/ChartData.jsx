import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function ChartData() {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 700)
      .attr('height', 300);

    const data = [
      { month: 1, total: 770095, incineration: 295355, garbageBury: 339023 },
      { month: 2, total: 629350, incineration: 248283, garbageBury: 256351 },
    ];

    const xScale = d3.scaleLinear().domain([0, 3]).range([50, 650]);
    const yScale = d3.scaleLinear().domain([0, 800000]).range([250, 50]);

    svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.month))
      .attr('cy', d => yScale(d.total))
      .attr('r', 5)
      .attr('fill', 'red');
  }, []);

  return <svg ref={ref}></svg>;
}
