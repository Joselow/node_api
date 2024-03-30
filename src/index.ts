import express from 'express'
import DiarieRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.use('/api/diaries', DiarieRouter)
// app.get('/hola', (_req, res) => {
//   console.log('Hola wn no seas gil')
//   res.send('Wn')
// })

app.listen(PORT, () => {
  console.log('El servidor esta en: http://localhost:' + PORT);
})