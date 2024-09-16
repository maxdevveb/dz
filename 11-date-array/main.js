/* 
Дан массив строк ['10-02-2022', 'тест', '11/-12/2023', '00/13/2022', '41/12/2023']

Необходимо написать функцию, которая бы удаляла из массива все строки, которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида:
- ['10-02-2022', '12-11-2023']
*/

function isValidDate(dateString) {
	const formats = [/^\d{2}-\d{2}-\d{4}$/, /^\d{2}\/\d{2}\/\d{4}$/]

	const isValidFormat = formats.some(format => format.test(dateString))
	if (!isValidFormat) return false

	const daysInMonth = month => {
		switch (month) {
			case 4:
			case 6:
			case 9:
			case 11:
				return 30
			case 2:
				return 28
			default:
				return 31
		}
	}

	const [part1, part2, year] = dateString.split(/[-/]/).map(Number)
	const [day, month] = dateString.includes('-')
		? [part1, part2]
		: [part2, part1]

	return day >= 1 && day <= daysInMonth(month) && month >= 1 && month <= 12
}

function formatDate(dateString) {
	const [part1, part2, year] = dateString.split(/[-/]/).map(Number)
	const [day, month] = dateString.includes('/')
		? [part1, part2]
		: [part2, part1]

	return `${String(day).padStart(2, '0')}-${String(month).padStart(
		2,
		'0'
	)}-${year}`
}

function filterAndFormatDates(arr) {
	return arr.filter(isValidDate).map(dateString => formatDate(dateString))
}

const datesArray = [
	'10-02-2022',
	'тест',
	'11/12/2023',
	'00/13/2022',
	'41/12/2023',
]
const result = filterAndFormatDates(datesArray)
console.log(result)
