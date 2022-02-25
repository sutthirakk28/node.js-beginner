const http = require('http')

const server = http.createServer((req,res)=>{
    const myhtml = `
    <h1>hello Node.js version 1.1.0</h1>
    <p>Node.js beginner</p>
    `
    res.write(myhtml)
    res.end()

})
server.listen(8000,'localhost',()=>{
    console.log("start server in port 8000")
})