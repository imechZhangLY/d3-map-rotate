//drag.js exports an object,
// the object contains the mousedown, the mousemove and mouseup function
var rotate = require("./rotate.js");
var dis = require("./distance.js");

module.exports = function(obj) {
	var drag = {},
		deg = obj.deg;

	drag.mousedown = function() {
		console.log(d3.event)
		this.lastPoint = [d3.event.clientX, d3.event.clientY];
	}

	drag.mousemove = function() {
		var e = d3.event
		var currentPoint = [e.clientX, e.clientY];
		if(!this.lastPoint || dis(currentPoint,this.lastPoint) < 10){
			return undefined;
		}
		rotate(obj.projection,this.lastPoint,currentPoint,deg);
		obj.mymap.selectAll("path").attr("d",obj.path4Render);
		this.lastPoint = currentPoint
	}

	drag.mouseup = function() {
		this.lastPoint = undefined;
	}

	return drag;
};