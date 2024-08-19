// const apiKey = process.env.REACT_APP_API_KEY_NEWSAPI
export const  getNewsByAPI = async () =>{
    const response = await fetch(`${process.env.PUBLIC_URL}/data_updated.json`)
    const data = await response.json()
    return data.articles
}