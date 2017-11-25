this is a npm module for rotate a d3 map
when you drag your map, the map will rotate
to use the module, you shoul do
1. npm install d3-map-rotate
2. in your js file write "var rotate = require("d3-map-rotate")"
3. var obj = {
	mymap: "a d3 object of your map",
	projection: "the projection function you use in your map",
	path4render: "the render function you use to render the map",
	deg: [0,0]
}
4. rotate(obj)