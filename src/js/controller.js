import state from './state.js'

import * as calendarController from './controllers/calendarController.js'
import * as expenditureController from './controllers/expenditureController.js'
import * as tagsController from './controllers/tagsController.js'

import { getISO } from './miscellaneous/utils.js'
import { updateSelectDate } from './models/expenditureModal.js'

const init = function () {
	state.currDate = new Date()
	updateSelectDate(getISO(state.currDate))

	calendarController.showCalendar(state.currDate)
	expenditureController.showExpenditures(state.expenditure)
	tagsController.showTags()

	//Adding all the hanlders here..
	calendarController.addHandlers()
	expenditureController.addHandlers()
	console.log(state)
}

init()
