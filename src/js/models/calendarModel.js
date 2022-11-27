import CalendarDates from 'calendar-dates'
import state from '../state.js'
import { wait } from '../utils.js'

export const loadCalendar = async function (date) {
	state.calendar.selectDate.year = date.getFullYear()
	state.calendar.selectDate.month = date.getMonth()
	state.calendar.selectDate.date = date.getDate()

	const calendarDates = new CalendarDates()
	const data = await calendarDates.getDates(date)

	state.calendar.data = data.filter(({ type }) => type === 'current' || type === 'previous')
}

export const loadCalendarExpenses = async function (calendar) {
	await wait(1) // add call to backend

	calendar.data.forEach((e) => {
		if (e.type === 'current') {
			e.expense = 100 // set the actual data here.
		}
	})

	calendar.hasExpensesData = true
}
