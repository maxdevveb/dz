/* 
Задание:

Создать функцию конвертации валют, принимающую три параметра:
- Сумма для конвертации
- Исходная валюта
- Целевая валюта

Пример работы функции:

Примерно 1000 рублей к долларам вернет $30.
Обработка ошибок:

- Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.

Логика функции:

- В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
- Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
- Если курс конвертации для заданной пары валют отсутствует, возвращается null.
Расширение функциональности:

Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
Протестируйте функцию с различными входными данными. 
*/

const RUB_PER_USD = 100
const USD_PER_RUB = 1 / RUB_PER_USD
const RUB_PER_EUR = 120
const EUR_PER_RUB = 1 / RUB_PER_EUR

function defineExchangeDirection(sourceCurrency, targetCurrency) {
	switch (true) {
		case sourceCurrency === 'rub' && targetCurrency === 'usd':
			return USD_PER_RUB
		case sourceCurrency === 'usd' && targetCurrency === 'rub':
			return RUB_PER_USD
		case sourceCurrency === 'rub' && targetCurrency === 'eur':
			return EUR_PER_RUB
		case sourceCurrency === 'eur' && targetCurrency === 'rub':
			return RUB_PER_EUR
		default:
			return null
	}
}

function currencyConverter(amountToConvert, sourceCurrency, targetCurrency) {
	exchangeRate = defineExchangeDirection(sourceCurrency, targetCurrency)
	if (exchangeRate === null) {
		return `Курс для конвертации ${sourceCurrency} в ${targetCurrency} не найден.`
	}
	return amountToConvert * exchangeRate
}

console.log(currencyConverter(100, 'rub', 'usd'))
