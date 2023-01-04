import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

const Tag = new mongoose.model('Tag', tagSchema)

export default Tag
