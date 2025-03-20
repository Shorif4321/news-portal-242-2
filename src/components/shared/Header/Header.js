import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/The Dragon News.png'

const Header = () => {
    return (
        <div className='text-center p-2 md:p-0 my-7 '>
            <Image className='w-4/6 md:w-3/6 block mx-auto ' src={headerImage} alt='news portal' width={600} height={300} />
            <p>Journalist Without Fear or Favour</p>
            <p>Thursday, March 20, 2025</p>

        </div>
    );
};

export default Header;