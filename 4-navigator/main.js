const positionLat = 2
const positionLong = 3

const addressLat = 5
const addressLong = 7

const distanceFromObject = Math.sqrt(
	(addressLong - positionLong) ** 2 + (addressLat - positionLat) ** 2
)

console.log('Расстояние: ' + distanceFromObject)
