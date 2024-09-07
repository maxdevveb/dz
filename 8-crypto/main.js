/* 
Задача:
Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.

Шифратор пароля:
- Функция принимает строку (пароль) для шифрования.
- По заданному алгоритму происходит перестановка символов в строке.
- Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
- Важно: шифрование должно быть обратимым.

Проверка пароля:
- Функция сравнивает зашифрованное слово с исходным паролем.
- Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
- В противном случае — false. 
*/

function encrypt(password) {
	function swapPairs(password, index) {
		if (index >= password.length) {
			return password
		}
		let arr = password.split('')
		if (index + 1 < arr.length) {
			;[arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
		}
		return swapPairs(arr.join(''), index + 2)
	}

	return swapPairs(password, 0)
}

function decrypt(encryptedPassword) {
	return encrypt(encryptedPassword)
}

function checkPassword(originalPassword, encryptedPassword) {
	return originalPassword === decrypt(encryptedPassword) ? true : false
}

const password = 'password'
const encrypted = encrypt(password)

console.log('Оригинальная строка:', password)
console.log('Перемешанная строка:', encrypted)
console.log('Проверка:', checkPassword(password, encrypted))
