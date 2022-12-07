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
