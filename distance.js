//calculate the distance between two points
module.exports = function(point1,point2) {
	var detaX = point1[0] - point2[0],
		detaY = point1[1] - point2[1];

	var dis = Math.sqrt(detaX**2 + detaY**2);
	return dis;
}