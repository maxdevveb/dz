/* 
бросок dice нужного типа
D4, D6, D8, D10, D12, D16, D20 
*/

function random(max) {
    return Math.floor(Math.random() * max) + 1
}

function throwDice(dType) {
    const dTypes = {
        d4: 4,
        d6: 6,
        d8: 8,
        d10: 10,
        d12: 12,
        d16: 16,
        d20: 20,
    }
    if (!dTypes[dType]) {
        return `${dType} нет такого типа dice`
    }
    const max = dTypes[dType]
    return `Бросаем dice: ${dType}. Выпало: ${random(max)}`
}

console.log(throwDice('d13')) // Нет такого типа
console.log(throwDice('d6')) // Например,
