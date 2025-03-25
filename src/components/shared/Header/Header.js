import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/The Dragon News.png'
import { getCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {
    const date = getCurrentDate()
    return (
        <div className='text-center p-2 md:p-0 my-7 '>
            <Image className='w-4/6 md:w-3/6 block mx-auto ' src={headerImage} alt='news portal' width={600} height={300} />
            <p>Journalist Without Fear or Favour</p>
            <p>{date}</p>
        </div>
    );
};

export default Header;