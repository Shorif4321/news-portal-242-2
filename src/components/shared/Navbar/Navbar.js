import React from 'react';
import Header from '../Header/Header';
import Link from 'next/link';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Categories',
        path: '/categories/news?category=technology'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
     {
        route: 'Pages',
        path: '/pages'
    },
]


const Navbar = () => {
    return (
        <div>
            <Header></Header>
            <div className="navbar bg-black px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item, i) => <li key={i} className='text-black font-semibold'><Link href={item.path}>{item.route}</Link></li>)
                            }
                            <li className='text-black'>
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
                    <Link href='/' className="">
                        <Image className='' src={logo} width={120} height={150} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
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

                <div className="navbar-end">
                    <Link href=""><FontAwesomeIcon className="text-white w-6 ms-3" icon={faFacebook} /></Link>
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faYoutube} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faTwitter} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faWhatsapp} />
                    <FontAwesomeIcon className="text-white w-6 ms-3" icon={faLinkedin} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;