import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			validate: validator.isEmail,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		photo: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.pre('save', async function (next) {
	// Run this function only if password was modified
	if (!this.isModified('password')) return next()

	this.password = await bcrypt.hash(this.password, 12)
	next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
	return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

export default User
