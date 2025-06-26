import { intervalToDuration } from 'https://cdn.jsdelivr.net/npm/date-fns@3.6.0/+esm'

function getDeclension(number, forms) {
	number = Math.abs(number) % 100
	let n1 = number % 10
	if (number > 10 && number < 20) return forms[2]
	if (n1 > 1 && n1 < 5) return forms[1]
	if (n1 == 1) return forms[0]
	return forms[2]
}

function getTimeToNewYear() {
	const now = new Date()
	const nextYear = now.getFullYear() + 1
	const newYear = new Date(nextYear, 0, 1, 0, 0, 0)

	const duration = intervalToDuration({ start: now, end: newYear })

	return {
		months: duration.months,
		days: duration.days,
		hours: duration.hours,
		minutes: duration.minutes,
		seconds: duration.seconds,
	}
}

function updateTimer() {
	const t = getTimeToNewYear()
	const timerEl = document.getElementById('timer')
	timerEl.textContent =
		`${t.months} ${getDeclension(t.months, ['месяц', 'месяца', 'месяцев'])}, ` +
		`${t.days} ${getDeclension(t.days, ['день', 'дня', 'дней'])}, ` +
		`${t.hours} ${getDeclension(t.hours, ['час', 'часа', 'часов'])}, ` +
		`${t.minutes} ${getDeclension(t.minutes, [
			'минута',
			'минуты',
			'минут',
		])}, ` +
		`${t.seconds} ${getDeclension(t.seconds, ['секунда', 'секунды', 'секунд'])}`
}

updateTimer()
setInterval(updateTimer, 1000)
