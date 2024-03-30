import express from "express";
import { getDiaries, getDiaresWithoutComment, addDiarie, getById } from "../services/diariesService";

const router = express.Router()

router.get('/', (_req, res) => {   
  res.json(getDiaries())
})

router.get('/without-comments', (_req, res) => {
  res.json(getDiaresWithoutComment())
})

router.get('/:id', (req, res) => {
  const diarieFounded = getById(Number(req.params.id))

  if (diarieFounded?.id) {
    res.json(diarieFounded)
  } else {
    res.sendStatus(404)
  }
})

router.post('/new-diarie', (req, res) => {
  const { id, date, weather, good_day, saw_accident, comment } = req.body
  const newDiarie = {  id, date, weather, good_day, saw_accident, comment, }
  addDiarie(newDiarie)
  res.json(newDiarie)
})

export default router