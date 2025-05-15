export const getCategoryNews= async (category)=>{
    const res = await fetch(`https://news-server-nine-psi.vercel.app/news?category=${category}`,{
        cache:'no-cache'
    })
    return res.json()

}