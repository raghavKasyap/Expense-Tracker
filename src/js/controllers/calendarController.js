import * as calendarModal from './../models/calendarModel.js'
import calendarView from '../views/calendarView.js'
import state from '../state.js'

let newTimer

export const showCalendar = async function (date) {
	try {
		// here i need to first generate the calendar with the load animation
		clearTimeout(newTimer)
		await calendarModal.loadCalendar(date)
		state.calendar.hasExpensesData = false

		calendarView.render(state.calendar)
		calendarView.addChangeMonthHandlerRender(showCalendar)
		// calendarView.render() with load animation

		newTimer = setTimeout(async () => {
			await calendarModal.loadCalendarExpenses(state.calendar)

			calendarView.render(state.calendar)
			calendarView.addChangeMonthHandlerRender(showCalendar)
		}, 1000)

		console.log(state.calendar)
	} catch (error) {}
}

// document.querySelector('.btn--nextMonth').addEventListener('click', (e) => {
// 	showCalendar(new Date(e.currentTarget.dataset.updateYear, e.currentTarget.dataset.updateMonth))
// })

// document.querySelector('.btn--prevMonth').addEventListener('click', (e) => {
// 	showCalendar(new Date(e.currentTarget.dataset.updateYear, e.currentTarget.dataset.updateMonth))
// })
