/* 
Написать функцию для проверки корректности номера карты с использованием алгоритма Луна.

Номер карты в виде строки (например, "4561-1213-4367-2612")
*/

function validateCardNumber(cardNumber) {
	// Убираем все символы, кроме цифр
	const cleanCardNumber = cardNumber.replace(/\D/g, '')

	// Проверяем, содержит ли строка только цифры и является ли её длина корректной (обычно 16 цифр)
	if (
		cleanCardNumber.length < 15 ||
		cleanCardNumber.length > 16 ||
		isNaN(cleanCardNumber)
	) {
		return false
	}

	// Применяем алгоритм Луна
	let sum = 0
	let shouldDouble = false

	// Проходим по цифрам с конца
	for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
		let digit = parseInt(cleanCardNumber[i])

		// Умножаем каждую вторую цифру на 2
		if (shouldDouble) {
			digit *= 2
			// Если результат умножения больше 9, вычитаем 9
			if (digit > 9) {
				digit -= 9
			}
		}

		// Добавляем цифру к общей сумме
		sum += digit

		// Меняем значение shouldDouble на противоположное, чтобы правильно применять удвоение к каждой второй цифре с конца.
		shouldDouble = !shouldDouble
	}

	// Проверяем, делится ли сумма на 10
	return sum % 10 === 0
}

console.log(validateCardNumber('4527928138651094'))
console.log(validateCardNumber('452-79281386-51094'))
console.log(validateCardNumber('452--7928$1386(()-5109/4'))
console.log(validateCardNumber('4561-1213-4367-2612'))
