//rotate function 
//deg is an array, the first element is longitude, the second element is latitude
module.exports = function(projection,lastPoint,currentPoint,deg) {
	var coor,coor1
	coor = projection.invert(lastPoint)
	coor1 = projection.invert(currentPoint)
	if(whichAxis(currentPoint,lastPoint) === 0){
		//转纬度
		if(currentPoint[1] > lastPoint[1]){
			deg[1] -= Math.abs(coor1[1] - coor[1])
		}else{
			deg[1] += Math.abs(coor1[1] - coor[1])
		}
	}else{
		//转经度
		coor = toPositive(coor)
		coor1 = toPositive(coor1)
		deg[0] += coor1[0] - coor [0]
	}
	projection.rotate(deg)
}

function whichAxis(currentPoint,lastPoint) {
	if(Math.abs(lastPoint[1] - currentPoint[1]) > Math.abs(lastPoint[0] - currentPoint[0])){
		return 0 //纬度转
	}else{
		return 1 //转经度
	}
}

function toPositive(arr){
	result = [arr[0], arr[1]]
	if(arr[0] < 0){
		result[0] += 360
	}
	return result
}

