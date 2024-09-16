/* 
Напишите функцию, которая принимает:
- Массив чисел
- Функцию удаления элементов

И возвращает отфильтрованный массив. При этом функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить
*/

const arr = [3, 6, 9, 2]

const clearArray = (numArr, fnDeleteEl) => {
	const result = []
	for (let i = 0; i < numArr.length; i++) {
		if (!fnDeleteEl(numArr[i])) {
			result.push(numArr[i])
		}
	}
	return result
}

const filterCondition = num => {
	return num >= 5
}

const filteredArray = clearArray(arr, filterCondition)

console.log(filteredArray)
