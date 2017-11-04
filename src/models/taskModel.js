import taskSchema from '../schemas/taskSchema'
import mongoose from 'mongoose'

const Task = mongoose.model('task', taskSchema)
export default Task
