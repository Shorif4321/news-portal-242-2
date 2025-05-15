import { getSingleNews } from '@/utilities/getSingleNews';
import Image from 'next/image';
import React from 'react';


const NewsDetailsPage = async ({params}) => {

   const news = await getSingleNews(params?.newsId)

    return (
        <div>
           <div  className="card bg-base-100 shadow-sm m-5">
                    <figure>
                        <Image className='w-full ' src={news.thumbnail_url} alt="news" width={1000} height={600} />
                    </figure>
                 <div className="card-body">
                     <h2 className="card-title">{news.title}</h2>
                    <p>{news.details}</p>
                </div>
               
                      <div className='flex justify-between'>
                          <Image className='w-full ' src={news.image_url} alt="news" width={500} height={300} />
                          <Image className='w-full ' src={news.thumbnail_url} alt="news" width={500} height={300} />
                      </div>
             
                   <div className=" flex p-10">
                    

                      <Image className='w-16 h-16 rounded-full' src={news.author.img} alt="news" width={100} height={100} />
                      <div className='ml-5'>
                         <h2 className="card-title">Author: {news.author.name} </h2>
                         <h2 className="card-title">Publish Date: {news.author.published_date}</h2>
                      </div>
                
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;