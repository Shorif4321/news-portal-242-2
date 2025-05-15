import { getAllCategories } from '@/utilities/getAllCategories';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {

   const allCategories = await getAllCategories();

    return (
        <div className='bg-neutral-200 p-4 rounded-2xl'>
            <h1 className="text-2xl ">Categories</h1>
            <div className="flex w-full flex-col">
                <div className="divider mt-1"></div>
            </div>

            {
                allCategories?.map(data=> <button key={data._id} className=' btn btn-outline w-full mb-5'><Link href={`/categories/news?category=${data.category.toLowerCase()}`}>{data.category}</Link></button> )
            }
        </div>
    );
};

export default CategoryList;