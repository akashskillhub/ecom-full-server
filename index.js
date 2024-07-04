const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.static("public"))
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

app.use("/api/admin", require("./routes/admin.routes"))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/public", require("./routes/public.route"))
app.use("/api/user", require("./routes/user.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found 404" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "Server Error", error: err.message })
})

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})

