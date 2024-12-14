'use strict'

const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const operationButtons = document.querySelectorAll('.operations button')
const resultDiv = document.querySelector('.result')

operationButtons.forEach(button => {
	button.addEventListener('click', function () {
		const num1 = parseFloat(num1Input.value)
		const num2 = parseFloat(num2Input.value)
		const operationSymbol = button.innerHTML
		let result

		switch (operationSymbol) {
			case '+':
				result = num1 + num2
				break
			case '-':
				result = num1 - num2
				break
			case '*':
				result = num1 * num2
				break
			case '/':
				result = num1 / num2
				break
			default:
				result = 'Неизвестная операция'
		}

		resultDiv.innerText = `Результат: ${result}`
	})
})
