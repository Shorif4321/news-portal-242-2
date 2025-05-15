export const getSingleNews= async (id)=>{
    const res = await fetch(`https://news-server-nine-psi.vercel.app/news/${id}`,{
        cache:'no-cache'
    })
const news = await res.json();
 return news
}