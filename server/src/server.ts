import express from "express"
import routes from "./routes"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const port: number = 3333

app.listen(port, () => {
  console.log(`Running on Port: ${port}`)
})
