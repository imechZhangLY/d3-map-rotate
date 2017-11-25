// a function to rotate the map
//putdown the left button of mouse and drag the map,the map will rotate
var Drag = require("./drag.js")
//parameter is an object, obj.mymap is an d3 object, d3.select("svg")
//obj.projection is an projection function,
//obj.path4render is an render function
module.exports = function(obj) {
	var drag = Drag(obj);
	obj.mymap.on("mousedown", drag.mousedown);
	obj.mymap.on("mousemove",drag.mousemove);
	obj.mymap.on("mouseup",drag.mouseup);
};