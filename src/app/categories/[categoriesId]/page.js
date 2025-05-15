import { getCategoryNews } from '@/utilities/getCategoryNews';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async({searchParams}) => {
  const data =  await getCategoryNews(searchParams.category)

    return (
        <div className="grid md:grid-cols-2 gap-5 ">
            {
                data.map(news => <Link key={news._id} href={`/${news.category}/${news._id}`}>
                <div  className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image className='w-full h-60'
                            src={news.thumbnail_url} alt="news" width={400} height={400} />
                                  </figure>
                    <div className="card-body">
                        <h2 className="card-title">{news.title}</h2>
                        <p>{news.details.length > 150 ? news.details.slice(0, 170) : news.details}</p>
                    </div>
                </div>
                </Link>)
            }
         </div>
    );
};

export default DynamicNewsPage;