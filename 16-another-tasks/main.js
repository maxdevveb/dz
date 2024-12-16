/* 
Возьмите объект из предыдущего домашнего задания и последовательно примените все методы его на новый объект 
*/

'use strict'

const ToDoList = {
	tasks: [],
	nextId: 1,

	addTask(title, priority) {
		const task = {
			title,
			id: this.nextId++,
			priority,
		}
		this.tasks.push(task)
	},
	removeTaskById(id) {
		this.tasks = this.tasks.filter(task => task.id !== id)
	},
	updateTaskById(id, newTitle, newPriority) {
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
	sortTasksByPriority() {
		this.tasks.sort((a, b) => b.priority - a.priority)
	},
}

const newList = Object.create(ToDoList)

newList.tasks = []
newList.nextId = 1

newList.addTask = function (title, priority, description = '') {
	ToDoList.addTask.call(this, title, priority)
	this.tasks[this.tasks.length - 1].description = description
}

newList.updateTaskById = function (id, newTitle, newPriority, newDescription) {
	ToDoList.updateTaskById.call(this, id, newTitle, newPriority)
	const task = this.tasks.find(task => task.id === id)
	if (task && newDescription !== undefined) {
		task.description = newDescription
	}
}

newList.addTask('Помыть посуду', 1)
newList.addTask('Сделать домашку', 2)
newList.addTask('Купить продукты', 3)
newList.removeTaskById(2)
newList.updateTaskById(1, 'Помыть посуду и стекло', 2)
newList.sortTasksByPriority()
console.log(newList.tasks)
