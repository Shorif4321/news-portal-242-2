export const getAllCategories =async ()=>{
    const res = await fetch("https://news-server-nine-psi.vercel.app/categories");
    const data = await res.json();
    return data;
}