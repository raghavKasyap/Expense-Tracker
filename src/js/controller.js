import state from './state.js'
import * as calendarController from './controllers/calendarController.js'

const init = function () {
	state.currDate = new Date()
	calendarController.showCalendar(state.currDate)

	//Adding all the hanlders here..
	calendarController.addHandlers()
}

init()
