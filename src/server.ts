import { app } from "./app"
import { stablishMongoDBConnection } from "./config/database/mongoDB-config"
import { runningMessage } from "./helpers/colorized-messages"

const port = process.env.PORT || 3333

app.listen(port,  () =>{
	console.log(runningMessage(new Date)+'Listening on port: ' + port)
})

stablishMongoDBConnection()