/* 
Написать объект ToDoList, который хранит в себе задачи 

{
	title: 'Помыть посуду',
	id: 1, 
	priority: 1
}

и имеет методы: 
- Добавить задачу 
- Удалить задачу по id 
- Обновить имя или приоритет по id 
- Отсортировать задачи по приоритету
*/

'use strict'

const ToDoList = {
	tasks: [], // Хранение списка задач
	nextId: 1, // Для генерации уникальных id

	// Метод для добавления задачи
	addTask: function (title, priority) {
		const task = {
			title: title,
			id: this.nextId++,
			priority: priority,
		}
		this.tasks.push(task)
	},

	// Метод для удаления задачи по id
	removeTaskById: function (id) {
		this.tasks = this.tasks.filter(task => task.id !== id)
	},

	// Метод для обновления задачи по id
	updateTaskById: function (id, newTitle, newPriority) {
		const task = this.tasks.find(task => task.id === id)
		if (task) {
			if (newTitle !== undefined) {
				task.title = newTitle
			}
			if (newPriority !== undefined) {
				task.priority = newPriority
			}
		} else {
			console.log(`Задача с id ${id} не найдена.`)
		}
	},

	// Метод для сортировки задач по приоритету
	sortTasksByPriority: function () {
		this.tasks.sort((a, b) => b.priority - a.priority)
	},
}

// Примеры использования:

ToDoList.addTask('Помыть посуду', 1)
ToDoList.addTask('Сделать домашку', 2)
ToDoList.addTask('Купить продукты', 3)

console.log('Задачи после добавления:')
console.log(ToDoList.tasks)

ToDoList.removeTaskById(2)
console.log(`Задачи после удаления задачи с id 2:`)
console.log(ToDoList.tasks)

ToDoList.updateTaskById(1, 'Помыть посуду и стекло', 5)
console.log('Задачи после обновления задачи id 1:')
console.log(ToDoList.tasks)

ToDoList.sortTasksByPriority()
console.log('Задачи после сортировки по приоритету:')
console.log(ToDoList.tasks)
