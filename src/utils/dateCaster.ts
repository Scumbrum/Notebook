export const stringToDate = (date:string):Date => {
    return new Date(Date.parse(date))
}