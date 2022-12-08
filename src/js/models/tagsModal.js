import { wait } from '../miscellaneous/utils'

export const loadTags = async function () {
	await wait(2)
	state.tags = {}
}
