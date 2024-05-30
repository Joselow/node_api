import express from "express";
import { getDiaries, getDiaresWithoutComment, addDiarie, getById } from "../services/diariesService";
import { verifyAndGetData } from "../utils/validations";

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
  try {
    const newDiarie = verifyAndGetData(req.body)
    addDiarie(newDiarie)
    res.json(newDiarie)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router