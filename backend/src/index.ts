import express, { Request, Response, Express} from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import cookie from 'cookie-parser'
import cookieParser from 'cookie-parser'

const port = 5000


const app: Express = express()

app.use(cors({origin: 'http://localhost:5173',credentials: true, exposedHeaders: ['Set-Cookie', 'Date', 'ETag']}))
app.use(express.urlencoded( {extended: true} ))
app.use(express.json())
app.use(cookieParser())

app.post('/', (req: Request, res: Response) =>{
    const { content } = req.body
    const token = jwt.sign(content, "asdfasdfasdfsddf")
    res.cookie('token', token)
    console.log(content)

    return res.send("hello")
})


app.listen(port, () =>{
    console.log('app is running on port: ' + port)
})