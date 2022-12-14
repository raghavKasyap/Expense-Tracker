export const getMonthName = (num) => {
	const months = [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	]

	return months[num].toUpperCase()
}

export const wait = function (sec) {
	return new Promise((resolve, _) => {
		setTimeout(resolve, sec * 1000)
	})
}

export const getJSONData = async function (url) {
	try {
		const res = await fetch(url)
		const data = await res.json()

		if (!res.ok) throw new Error(`${data.message} (${res.status})`)
		return data
	} catch (err) {
		throw err
	}
}

export const getISO = function (date) {
	const offset = date.getTimezoneOffset()
	date = new Date(date.getTime() - offset * 60 * 1000)
	return date.toISOString().split('T')[0]
}

export const formatDate = function (date) {
	const dateArr = date.split('-')
	dateArr.reverse()
	return dateArr.join('/')
}
