let answer = prompt('Ваш язык?')

switch (true) {
	case answer === 'en':
		console.log('Hello!')
		break
	case answer === 'ru':
		console.log('Привет!')
		break
	case answer === 'de':
		console.log('Gutten tag!')
		break
	case answer === 'fr':
		console.log('Bonjour!')
		break

	default:
		console.log('Неизвестный язык')
}

/* switch (answer.toLowerCase()) {
	case 'en':
			console.log('Hello!')
			break
	case 'ru':
			console.log('Привет!')
			break
	case 'de':
			console.log('Gutten tag!')
			break
	case 'fr':
			console.log('Bonjour!')
			break

	default:
			console.log('Неизвестный язык')
} */
