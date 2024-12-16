/* 
Написать функцию которая принимает объект query параметров и возвращает строку для вставки

const obj = { search: 'Вася', take: 10 }

// search=Вася&take=10
*/

/**
 * Преобразует объект в строку запроса.
 *
 * @param {Object} params - Объект с параметрами запроса.
 * @returns {String} - Строка запроса.
 */

function toQueryString(params) {
	// Преобразуем объект в массив пар [ключ, значение]
	const entries = Object.entries(params)

	// Преобразуем каждую пару в строку вида "ключ=значение"
	const queryString = entries.map(([key, value]) => `${key}=${value}`).join('&')

	return queryString
}

const obj = { search: 'Вася', take: 10 }
console.log(toQueryString(obj))
