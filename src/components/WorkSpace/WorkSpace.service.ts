import { monthes } from "../../utils/constants"

export const dateStringify = (date: Date):string => {
    const month = monthes[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${day} ${month} ${year}, ${hour}:${minutes}`
}