import state from './state.js'
import * as calendarController from './controllers/calendarController.js'

const init = function () {
	state.currDate = new Date()
	calendarController.showCalendar(state.currDate)

	document.querySelector('.btn--today').addEventListener('click', () => {
		calendarController.showCalendar(state.currDate)
	})
}

init()
