import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white border-t-2 border-black shadow dark:bg-black dark:border-gray-800 dark:text-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <span className="text-black self-center text-4xl font-semibold whitespace-nowrap dark:text-white">FavPag<span className='text-[#30b388]'>e</span></span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                    </ul>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm font-bold text-black sm:text-center dark:text-white textFooter">2024 <Link href="#" className="hover:underline" target='_blank'>Esteban <span className='text-[#30b388]'>Oller</span></Link>...</span>
            </div>
        </footer>
    );
};

export default Footer;