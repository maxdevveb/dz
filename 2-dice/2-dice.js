/* 
бросок dice нужного типа
D4, D6, D8, D10, D12, D16, D20 
*/

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function throwDice(dType) {
	const dTypes = {
		d4: { min: 1, max: 4 },
		d6: { min: 1, max: 6 },
		d8: { min: 1, max: 8 },
		d10: { min: 1, max: 10 },
		d12: { min: 1, max: 12 },
		d16: { min: 1, max: 16 },
		d20: { min: 1, max: 20 },
	}
	if (!dTypes[dType]) {
		return `${dType} нет такого типа dice`
	}
	const { min, max } = dTypes[dType]
	return `Бросаем dice: ${dType}. Выпало: ${random(min, max)}`
}

console.log(throwDice('d13')) // Нет такого типа
console.log(throwDice('d6')) // Например, 4
