import express from "express"

const app = express()
app.get('/', (req, res) => {
    res.send("hello kryptonian")
})

app.get('/api/jokes', (req, res)=> {
    const jokes = [
        
        {
            id: 1,
            title: "my my ",
            description: "aye aye caption he said"
        }
    ]
    res.send(jokes)
})   

const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log(`server is listening on localhost:${port}`);
})