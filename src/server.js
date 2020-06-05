const express = require("express")
const server = express()


server.use(express.static("public"))


const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



server.get("/", function(req, res){
    return res.render("index.html", {title: "Um título" })
})

server.get("/create-point", function(req, res){
    return res.render("create-point.html")
})

server.get("/search", function(req, res){
    return res.render("search-results.html")
})


server.listen(3000)
