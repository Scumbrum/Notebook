import {marked} from "marked"

export const cutContent = (content:string):string => {
    let appender = "..."
    let parsedContent = htmlTextExtracor(content)
    if(parsedContent.length > 10) {
        return parsedContent.substring(0,10) + appender
    }
    if(parsedContent.length === 0) {
        return "No comment"
    }
    return parsedContent
}

const htmlTextExtracor = (value:string):string => {
    const htmlText = marked.parse(value)
    const parsed = new DOMParser().parseFromString(htmlText, "text/html")
    return parsed.body.innerText
}