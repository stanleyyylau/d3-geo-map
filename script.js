var dataSet = {};
var $container = d3.select('.container');

var w = 500;
var h = 300;

var path = d3.geo.path().projection(projection);
var svg = d3.select('.container').append('svg').attr('width', w).attr('height', h);
var projection = d3.geo.mercator()
             .translate([w/2, h/2])
             .scale([8500]);

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json', function(err, data){
  if (err) return err;
  dataSet = data;
  visualiseIt();
})


function visualiseIt(){
  svg.selectAll("circle")
         .data(dataSet.features)
         .enter()
         .append("circle")
         .attr("cx", function(d){
           return projection([d[0], d[1]])[0];
         })
         .attr("cy", function(d){
           return projection([d[0], d[1]])[1];
         });
}
