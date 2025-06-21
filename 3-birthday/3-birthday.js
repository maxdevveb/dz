/* 
Задача:
- Разработать функцию для валидации возраста пользователя.
Входные данные:
- Строка с датой рождения в формате "ГГГГ-ММ-ДД".
Условия:
- Функция должна возвращать `true`, если пользователю больше 14 лет.
- Функция должна возвращать `false`, если пользователю меньше 14 лет.
Применение:
- Функция будет использоваться для валидации возраста при регистрации пользователя на платформе или в приложении.
*/

const str = '2000-05-12'

function isAge(str) {
	const birthday = new Date(str)
	const today = new Date()

	// Дата, когда человеку исполнится 14 лет
	const birthdayPlus14 = new Date(birthday)
	birthdayPlus14.setFullYear(birthday.getFullYear() + 14)

	return today >= birthdayPlus14
}
console.log(isAge(str))
