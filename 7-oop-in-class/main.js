/* 
- Повторите упражнение из раздела 7, но используя классы.
- Сделайте переопределение метода "говорить" для эльфа и для орка
*/

// Базовый класс Персонаж
class Character {
	constructor(race, name, language) {
		this.race = race
		this.name = name
		this.language = language
	}
	speak() {
		console.log(`${this.name} говорит на языке: ${this.language}`)
	}
}

// Класс Орк
class Orc extends Character {
	constructor(name, weapon) {
		super('Орк', name, 'орочий')
		this.weapon = weapon
	}
	hit() {
		console.log(`${this.name} наносит удар оружием: ${this.weapon}`)
	}
	speak() {
		console.log(`${this.name} рычит на орочьем языке!`)
	}
}

// Класс Эльф
class Elf extends Character {
	constructor(name) {
		super('Эльф', name, 'эльфийский')
		this.spellTypes = []
	}
	createSpell(spellName) {
		if (!spellName) {
			console.log(`${this.name} не указал название заклинания для создания`)
			return
		}
		if (this.spellTypes.includes(spellName)) {
			console.log(`${this.name} уже знает заклинание "${spellName}"`)
			return
		}
		this.spellTypes.push(spellName)
		console.log(`${this.name} создал новое заклинание: ${spellName}`)
	}
	castSpell(spellName) {
		if (!spellName) {
			console.log(
				`${this.name} знает заклинания: ${this.spellTypes.join(', ') || 'нет'}`
			)
			return
		}
		if (this.spellTypes.includes(spellName)) {
			console.log(`${this.name} применяет заклинание: ${spellName}`)
		} else {
			console.log(`${this.name} не знает заклинание "${spellName}"`)
		}
	}
	speak() {
		console.log(`${this.name} произносит на эльфийском: "Привет!"`)
	}
}

// Пример
const orc = new Orc('Тралл', 'молот')
orc.speak()
orc.hit()

const elf = new Elf('Иллидан')
elf.speak()
elf.createSpell('огонь')
elf.createSpell('вода')
elf.createSpell('огонь')
elf.castSpell('огонь')
elf.castSpell('фаербол')
elf.castSpell()
