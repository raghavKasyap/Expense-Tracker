import { wait } from '../miscellaneous/utils'
import state from '../state'

export const loadExpendituresOnDate = async function (date) {
	// call to backend to get data for current date
	await wait(3)

	state.expenditure.hasData = true
	state.expenditure.expenditures = {}
}

// This stores date in the form of iso
export const updateSelectDate = function (date) {
	state.expenditure.hasData = false
	state.expenditure.selectDate = date
	state.expenditure.expenditures = {}
}
