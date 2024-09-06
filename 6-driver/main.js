/* 
Написать код одной строкой.
Проверить, может ли пользователь сесть за руль, исходя из трех параметров:

- Наличие водительских прав (hasLicense)
- Возраст 18 лет и старше (age)
- Трезвость пользователя (isDrunk)
*/

const hasLicense = true
const age = 18
const isDrunk = false

console.log(
	`Может водить? ${hasLicense && age >= 18 && !isDrunk ? 'Может' : 'Не может'}`
)
