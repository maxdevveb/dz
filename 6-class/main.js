/* 
Создайте класс Car у которого есть 
	- марка, 
	- модель 
	- пробег 
(все свойства приватные, задаются в конструкторе).

- Сделайте для него возможность менять пробег через get и set.
- Добавьте метод info, который выводит в консоль марку, модели и пробег.
*/

class Car {
	#brand
	#model
	#mileage

	constructor(brand, model, mileage) {
		this.#brand = brand
		this.#model = model
		this.#mileage = mileage
	}

	get mileage() {
		return this.#mileage
	}

	set mileage(value) {
		if (typeof value === 'number' && value >= 0) {
			this.#mileage = value
		} else {
			console.log('Пробег должен быть неотрицательным числом')
		}
	}

	info() {
		console.log(
			`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`
		)
	}
}

// Пример использования:
const car = new Car('Toyota', 'Camry', 50000)
car.info() // Марка: Toyota, Модель: Camry, Пробег: 50000
car.mileage = 60000
car.info() // Марка: Toyota, Модель: Camry, Пробег: 60000
car.mileage = -100 // Ошибка
