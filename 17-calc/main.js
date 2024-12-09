/* 
Возьмите объект из предыдущего домашнего задания и последовательно примените все методы его на новый объект 
*/

'use strict'

const newTask = {
	tasks: [
		{
			id: 1,
			name: 'test',
			description: 'desc',
			order: 0,
		},
	],
}

const ToDoListWithDescription = {
	tasks: [], // Хранение списка задач
	nextId: 1, // Для генерации уникальных id

	// Метод для добавления задачи с описанием
	addTask: function (name, description, order) {
		const task = {
			name: name,
			id: this.nextId++,
			description: description,
			order: order,
		}
		this.tasks.push(task)
	},

	// Метод для удаления задачи по id
	removeTaskById: function (id) {
		this.tasks = this.tasks.filter(task => task.id !== id)
	},

	// Метод для обновления задачи по id
	updateTaskById: function (id, newName, newDescription, newOrder) {
		const task = this.tasks.find(task => task.id === id)
		if (task) {
			if (newName !== undefined) {
				task.name = newName
			}
			if (newDescription !== undefined) {
				task.description = newDescription
			}
			if (newOrder !== undefined) {
				task.order = newOrder
			}
		} else {
			console.log(`Задача с id ${id} не найдена.`)
		}
	},

	// Метод для сортировки задач по порядку (order)
	sortTasksByOrder: function () {
		this.tasks.sort((a, b) => a.order - b.order)
	},
}

// Примеры использования:

ToDoListWithDescription.addTask(
	'Помыть посуду',
	'Необходимо помыть всю посуду на кухне',
	2
)
ToDoListWithDescription.addTask(
	'Сделать домашку',
	'Домашнее задание по математике',
	1
)
ToDoListWithDescription.addTask('Купить продукты', 'Купить молоко и хлеб', 3)

console.log('Задачи после добавления:')
console.log(ToDoListWithDescription.tasks)

ToDoListWithDescription.removeTaskById(2)
console.log(`Задачи после удаления задачи с id 2:`)
console.log(ToDoListWithDescription.tasks)

ToDoListWithDescription.updateTaskById(
	1,
	'Помыть посуду и стекло',
	'Помыть посуду и стекло на кухне',
	1
)
console.log('Задачи после обновления задачи id 1:')
console.log(ToDoListWithDescription.tasks)

ToDoListWithDescription.sortTasksByOrder()
console.log('Задачи после сортировки по порядку:')
console.log(ToDoListWithDescription.tasks)
