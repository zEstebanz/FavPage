import Link from 'next/link';
import Image from 'next/image';
import ChangeTheme from '../components/ChangeTheme';

const Nav = () => {
    return (
        <nav className="bg-white dark:bg-black text-black dark:text-white p-2 fixed w-full top-0 z-10 border-b-2 border-black dark:border-gray-800">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <p className="text-3xl font-bold">FavPag<span className='text-[#30b388]'>e</span></p>
                        </div>
                    </Link>
                    <div className="flex items-center"> {/* Nuevo contenedor para centrar */}
                        <ChangeTheme />
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Nav;
