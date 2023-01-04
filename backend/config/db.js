import mongoose from 'mongoose'
import chalk from 'chalk'

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true)
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})

		console.log(chalk.cyan.underline(`MongoDB connected: ${conn.connection.host}`))
	} catch (e) {
		console.log(chalk.red.underline.bold(`Error: ${e.message}`))
		process.exit(1)
	}
}

export default connectDB
