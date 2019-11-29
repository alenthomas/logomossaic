import * as d3 from "d3";
  

export default function(data, width, height){
  return d3
    .treemap()
    .tile(d3["treemapSquarify"])
    .size([width, height])
    .round(true)(d3.hierarchy(data).sum(d => d.count));
}