import Modal from '../miscellaneous/modal'
import * as tagsModal from '../models/tagsModal'
import tagView from '../views/tagView'

export const showTags = async function () {
	tagView.renderLoader()

	await tagsModal.loadTags()
	tagView.render(state.tags)
}

export const addHandlers = async function () {
	tagView.addTagModalHandler()
}
