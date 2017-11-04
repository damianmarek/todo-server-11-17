import { Schema } from 'mongoose'

const taskSchema = new Schema({
  title: String,
  content: { type: String, default: '' },
  done: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
})

export default taskSchema