export const getAllNews = async () => {
    const res = await fetch('https://news-server-nine-psi.vercel.app/all-news', {
        cache: 'force-cache'
    })
    const data = await res.json();
    return data
}