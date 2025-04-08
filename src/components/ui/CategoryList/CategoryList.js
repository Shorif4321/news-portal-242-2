import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
    return (
        <div className='bg-neutral-200 p-4 rounded-2xl'>
            <h1 className="text-2xl ">Categories</h1>
            <div className="flex w-full flex-col">
                <div className="divider mt-1"></div>
            </div>
            <Link href='/'>  <button className=' btn btn-outline w-full mb-5'>Sports</button></Link>
            <button className=' btn btn-outline w-full mb-5'><Link href='/'>Entertainment</Link></button>
            <button className=' btn btn-outline w-full mb-5'>Sports</button>
            <button className=' btn btn-outline w-full mb-5'>Entertainment</button>
            <button className=' btn btn-outline w-full mb-5'>Sports</button>
            <button className=' btn btn-outline w-full mb-5'>Entertainment</button>

        </div>
    );
};

export default CategoryList;