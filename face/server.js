const express = require("express")
const path = require("path")
const {get} = require("request")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// htmls
const viewsDir = path.join(__dirname, "views")
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, "images")))
app.use(express.static(path.join(__dirname, "media")))

// localhost:9000
app.get("/", (req, res) => {
    res.redirect("/face_detection")
})

// localhost:9000/face_detection
app.get("/face_detection", (req, res) => {
    res.sendFile(path.join(viewsDir, "faceDetection.html"))
})

app.listen(9000, console.log("is running on 9000"))