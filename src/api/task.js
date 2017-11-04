import { Router } from 'express'
import Task from '../models/taskModel'

const router = Router()

router.get('/', async (req, res) => {
  try { 
    const tasks = await Task.find({})
    return res.status(200).json(tasks)
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    return res.status(200).json(task)
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
  
})

router.post('/', async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
    })
    const result = await task.save()
    const tasks = await Task.find({})
    return res.status(200).json(tasks)
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
})

export default router