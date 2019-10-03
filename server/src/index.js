import { createServer } from 'http'
import app from './app'

app.get('/', (req, res) => {
  res.send({answer: 'Hey?'})
  console.log(req)
})
app.listen(8080, ()=>{console.log('ok, listening')});
