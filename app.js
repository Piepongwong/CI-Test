const express = require("express")
const app = express()

app.set("PORT", 3000)

app.get("/", (req, res) => {

	console.log("Reachedddasd jaaaaaaaaaaa")
	res.status(200).send("Hiii automatic deployment!!")

})

app.listen(app.get("PORT"), function(){
	console.log("App is listening at port", app.get("PORT"))
})