const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/cms", require("./routes/cms.route.js"))

app.get("/", (req, res) => {
    res.send("Healing Kerala")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
