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
function Elf(name, spellTypes) {
	Character.call(this, 'Эльф', name, 'эльфийский')
	this.spellTypes = spellTypes
}

Elf.prototype = Object.create(Character.prototype)
Elf.prototype.constructor = Elf

Elf.prototype.createSpell = function (spellName) {
	if (!this.spellTypes || this.spellTypes.length === 0) {
		console.log(`${this.name} не знает ни одного заклинания`)
		return
	}
	if (!spellName) {
		console.log(`${this.name} знает заклинания: ${this.spellTypes.join(', ')}`)
		return
	}
	if (this.spellTypes.includes(spellName)) {
		console.log(`${this.name} создает заклинание: ${spellName}`)
	} else {
		console.log(`${this.name} не знает заклинание "${spellName}"`)
	}
}

// Пример
const orc = new Orc('Тралл', 'молот')
orc.speak()
orc.hit()

const elf = new Elf('Иллидан', ['огонь', 'вода'])
elf.speak()
console.log(elf.spellTypes)
elf.createSpell('огонь') // Иллидан создает заклинание: огонь
elf.createSpell('фаербол') // Иллидан не знает заклинание "фаербол"
elf.createSpell() // Иллидан знает заклинания: огонь, вода
