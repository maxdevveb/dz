// Персонаж
function Character(race, name, language) {
	this.race = race
	this.name = name
	this.language = language
}

Character.prototype.speak = function () {
	console.log(`${this.name} говорит на языке: ${this.language}`)
}

// Орк
function Orc(name, weapon) {
	Character.call(this, 'Орк', name, 'орочий')
	this.weapon = weapon
}

Orc.prototype = Object.create(Character.prototype)
Orc.prototype.constructor = Orc

Orc.prototype.hit = function () {
	console.log(`${this.name} наносит удар оружием: ${this.weapon}`)
}

// Эльф
function Elf(name) {
	Character.call(this, 'Эльф', name, 'эльфийский')
	this.spellTypes = [] // массив известных заклинаний
}

Elf.prototype = Object.create(Character.prototype)
Elf.prototype.constructor = Elf

Elf.prototype.createSpell = function (spellName) {
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

Elf.prototype.castSpell = function (spellName) {
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

// Пример
const orc = new Orc('Тралл', 'молот')
orc.speak()
orc.hit()

const elf = new Elf('Иллидан')
elf.speak()
elf.createSpell('огонь') // Иллидан создал новое заклинание: огонь
elf.createSpell('вода') // Иллидан создал новое заклинание: вода
elf.createSpell('огонь') // Иллидан уже знает заклинание "огонь"
elf.castSpell('огонь') // Иллидан применяет заклинание: огонь
elf.castSpell('фаербол') // Иллидан не знает заклинание "фаербол"
elf.castSpell() // Иллидан знает заклинания: огонь, вода
