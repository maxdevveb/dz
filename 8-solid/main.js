/* 
Спроектируйте класс Billing со свойством amount и методом calculateTotal для расчёта счёта. Сделайте разный calculateTotal для разных типов:

fixBilling - где нужно вернуть amount как результат
hourBilling - который считает amount * число часов
itemBilling где считается amount * число элементов
Соблюдайте принцип открытости / закрытости!


Цель: Применение и тренировка принципа открытости/закрытости через проектирование класса Billing.

Задача:

Разработать класс Billing, олицетворяющий счет.
Счет может быть различного типа: фиксированный, почасовой, по элементам.
По умолчанию, Billing имеет свойство Amount и метод CalculateTotal для расчета Amount.
Варианты реализации CalculateTotal:

Fixed Billing: Возвращает текущий Amount.
Hour Billing: Возвращает Amount, умноженный на количество часов. Количество часов передается через конструктор.
Item Billing: Аналогично Hour Billing, но вместо часов используется количество элементов.
Важное условие: Соблюдение принципа открытости/закрытости. Разработка должна происходить через наследование, а не модификацию исходного класса Billing для поддержки новых типов расчетов.

Что избегать:

Избегайте реализации универсального метода CalculateTotal, который изменяет свое поведение в зависимости от типа биллинга, так как это нарушает принцип открытости/закрытости.
*/

// Базовый класс
class Billing {
	constructor(amount) {
		this.amount = amount
	}

	// Метод calculateTotal должен быть реализован в наследниках
	calculateTotal() {
		throw new Error('Метод calculateTotal должен быть реализован в подклассе')
	}
}

// Фиксированный биллинг
class FixedBilling extends Billing {
	calculateTotal() {
		return this.amount
	}
}

// Почасовой биллинг
class HourBilling extends Billing {
	constructor(amount, hours) {
		super(amount)
		this.hours = hours
	}

	calculateTotal() {
		return this.amount * this.hours
	}
}

// Биллинг за элементы
class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount)
		this.items = items
	}

	calculateTotal() {
		return this.amount * this.items
	}
}

// Использование
const b1 = new FixedBilling(100)
const b2 = new HourBilling(50, 10)
const b3 = new ItemBilling(20, 5)

console.log(b1.calculateTotal()) // 100
console.log(b2.calculateTotal()) // 500
console.log(b3.calculateTotal()) // 100
