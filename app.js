const express = require("express")
const app = express()

app.set("PORT", 3000)

app.get("/", (req, res) => {

	console.log("Reached")
	res.status(200).send("HI, I'm working. And I am a change! ANother!asdfasf")

})

app.listen(app.get("PORT"), function(){
	console.log("App is listening at port", app.get("PORT"))
})