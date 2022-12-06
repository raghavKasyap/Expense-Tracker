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
		// calendarView.render() with load animation

		newTimer = setTimeout(async () => {
			await calendarModal.loadCalendarExpenses(state.calendar)
			calendarView.render(state.calendar)
		}, 1000)

		console.log(state.calendar)
	} catch (error) {}
}

export const addHandlers = function () {
	calendarView.addChangeMonthHandlerRender(showCalendar)

	// Today btn handler
	document.querySelector('.btn--today').addEventListener('click', () => {
		showCalendar(state.currDate)
	})
}

// TODO
// Make a controller for today

// document.querySelector('.btn--nextMonth').addEventListener('click', (e) => {
// 	showCalendar(new Date(e.currentTarget.dataset.updateYear, e.currentTarget.dataset.updateMonth))
// })

// document.querySelector('.btn--prevMonth').addEventListener('click', (e) => {
// 	showCalendar(new Date(e.currentTarget.dataset.updateYear, e.currentTarget.dataset.updateMonth))
// })
