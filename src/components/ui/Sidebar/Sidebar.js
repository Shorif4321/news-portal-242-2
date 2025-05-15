import { getAllNews } from '@/utilities/getAllNews';
import { getCurrentDate } from '@/utilities/getCurrentDate';
import Image from 'next/image';
import React from 'react';

const Sidebar = async () => {
    const  data  = await getAllNews();
    const date = getCurrentDate()
    return (
        <div>
            {/* single data */}
            <div className="card bg-base-100  shadow-sm">
                <Image className='w-full' src={data[5]?.thumbnail_url} width={500} height={500}
                    alt="web image" />

                <div className="card-body">
                    <div className="card-actions ">
                        <button className="btn bg-green-600 text-white rounded-3xl">{data[5].category}</button>
                    </div>
                    <h2 className="card-title">{data[5].title}</h2>
                    <p>{data[5].details.length > 150 ? data[5].details.slice(0, 150) : data[0].details}</p>

                </div>
            </div>

            {/* four item */}
            <div className="grid  gap-5 my-5">
                {
                    data.slice(6, 14).map(news => <div key={news._id} className="card bg-base-100 shadow-sm">
                        <div className='flex items-center'>

                            <Image className='h-20 w-20 rounded-lg'
                                src={news.thumbnail_url}
                                alt="news" width={400} height={400} />
                            <div className="p-2">
                                <h2 className="card-title">{news.title}</h2>
                                <p className='text-purple-700'>{date}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* single card */}
            <div className="  shadow-sm">
                <Image className='w-full h-64' src={data[14]?.thumbnail_url} width={500} height={700}
                    alt="web image" />
            </div>




        </div>
    );
};

export default Sidebar;