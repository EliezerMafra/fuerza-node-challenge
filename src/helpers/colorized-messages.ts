import { 
	colorBrightGreen,
	colorBrightRed,
	colorReset,
	colorPalidWhite,
	colorYellow,
	colorBrightMagenta,
	} from "./color-codes";
import { formatDateToDateAndTime } from "./format-date";

export const connectedMessage = (date: Date) => {return ('['+colorBrightGreen+'CONNECTED'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')} 
export const runningMessage = (date: Date) => {return ('['+colorBrightGreen+'RUNNING'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}
export const errorMessage = (date: Date) => {return ('['+colorBrightRed+'ERROR'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}
export const createMessage = (date: Date) => {return ('['+colorBrightGreen+'CREATE'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}
export const getMessage = (date: Date) => {return ('['+colorBrightMagenta+'GET'+colorReset+'] \t\t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}
export const updateMessage = (date: Date) => {return ('['+colorYellow+'UPDATE'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}
export const deleteMessage = (date: Date) => {return ('['+colorBrightRed+'DELETE'+colorReset+'] \t' + colorPalidWhite + formatDateToDateAndTime(date) + '\t' + colorReset + ' ')}