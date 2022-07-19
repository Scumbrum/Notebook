import { Note } from "../../models/databaseModels"
import { monthes } from "../../utils/constants"

export const dateStringify = (date: Date):string => {
    const month = monthes[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${day} ${month} ${year}, ${hour}:${minutes}`
}

export const insertUpdatedNote = (notes: (Note | null)[], selected: number, content: string):(Note | null)[] =>  {
    return notes.map(note => {
        if(note && note.id === selected) {
            return {...note, content, date: new Date().toString()}
        }
        return note
    })
}

export const deleteNote = (notes: (Note | null)[], selected: number):(Note | null)[] =>  {
    const resonse = prompt("Вы уверены что хотите удалить(y/n)?")
    if(resonse?.toLowerCase() !== "y") {
        return notes
    }
    return notes.map(note => {
        if(note && note.id === selected) {
            return null
        }
        return note
    })
}