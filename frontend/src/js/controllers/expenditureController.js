import { wait } from '../miscellaneous/utils'
import { loadExpendituresOnDate } from '../models/expenditureModal'
import state from '../state'
import expenditureView from '../views/expenditureView'

export const showExpenditures = async function (data) {
	// update date first
	expenditureView.updateDate(data.selectDate)
	expenditureView.render(data)

	await loadExpendituresOnDate(data.selectDate)
	expenditureView.render(data)
}

const deleteExpenditureController = async function (deleteExpense) {
	deleteExpense.classList.add('delete')
	await wait(1)
	deleteExpense.remove()
}

export const addHandlers = function () {
	expenditureView.addDeleteHandler(deleteExpenditureController)
	expenditureView.addExpenseModalHandler()
}
