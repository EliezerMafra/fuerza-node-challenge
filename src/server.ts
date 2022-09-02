import { app } from "./app"
import { stablishMongoDBConnection } from "./config/database/mongoDB-config"
import { runningMessage } from "./helpers/colorized-messages"

const port = parseInt(process.env.PORT||'3030')

const server_ip = process.env.SERVER_IP || 'localhost'

app.listen(port, server_ip,  () =>{
	console.log(runningMessage(new Date)+'Listening on http://' + server_ip + ':' + port)
})

stablishMongoDBConnection()