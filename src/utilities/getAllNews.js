export const getAllNews = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/all-news', {
        cache: 'force-cache'
    })
    const data = await res.json();
    return data
}