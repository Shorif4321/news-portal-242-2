import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Pages',
        path: '/pages'
    },
    {
        route: 'Categories',
        path: '/categories'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'Contact',
        path: '/contact'
    }
]

const Footer = () => {
    return (
        <div className='bg-black p-10'>

            <div className='flex justify-center'>
                <div className="flex">
                    <Link href=""><FontAwesomeIcon className="text-white w-6 ms-3" icon={faFacebook} /></Link>
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faYoutube} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faTwitter} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faWhatsapp} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faLinkedin} />
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navItems.map((item, i) => <li key={i} className='text-white font-semibold'><Link href={item.path}>{item.route}</Link></li>)
                        }
                        <li className='text-white'>
                            <details >
                                <summary>Parent</summary>
                                <ul className="p-2 text-black">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
            </div>

            <p className='text-gray-700 text-center'>@2025 The News Portal. Design by Developer Shoriful Islaml </p>
        </div>
    );
};

export default Footer;