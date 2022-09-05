import mongoose from "mongoose"
import { connectedMessage, errorMessage } from "../../helpers/colorized-messages"
import 'dotenv/config';

export let mongoDb = mongoose.connection

export const closeConnectionToMongoDb = () => {mongoDb.close()}

export function stablishMongoDBConnection(){
	mongoose.connect(process.env.DB_URL || '')
	mongoDb.on('error', console.log.bind(console, errorMessage(new Date)+'MongoDB connection error'))
	mongoDb.once('open', () => console.log(connectedMessage(new Date)+'Successfully connected to MongoDB on '+process.env.DB_URL))
}