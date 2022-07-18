export const cutContent = (content:string):string => {
    let appender = "..."
    if(content.length > 10) {
        return content.substring(0,10) + appender
    }
    return content
}