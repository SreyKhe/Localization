'use client';
import { useLocale, useTranslations } from 'next-intl';
import { FaRegHeart } from 'react-icons/fa'; // Import React Icons (from 'react-icons/fa' for Font Awesome icons)
import LanguageSwitcher from './LanguageSwitcher';
import { IoMdSearch } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useState } from 'react'; // Importing useState to manage the mobile menu
import menuData from "../data/menuItem.json"
import { TMenu } from '@/models/menuItems.model';
import iconData from "../data/iconItems.json"
import {TIcons} from "@/models/iconItems.model"
import Image from 'next/image';
import logo from "../../public/logo.png"
import Link from 'next/link';
const iconMapping: { [key: string]: React.ComponentType } = {
    IoMdSearch,
    FaRegCircleUser,
    FaRegHeart,
    RiShoppingCartLine,
  };
const Navbar = () => {
  const t = useTranslations('menu'); // Access translations from the 'menu' namespace
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const locale = useLocale();
  // Toggle the menu visibility on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
            <Link href={`/${locale}`}>
                <Image src={logo} alt="logo" width={50} height={50} className="rounded-full" />
            </Link>
        </div>
        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-16 items-center ">
            <div className="">
                <ul className="flex space-x-10 ">
                    {menuData.menuItems.map((item:TMenu,index:number) => (
                        <li key={index}>
                            <a href={`/${locale}${item.link}`} className="hover:text-gray-300 text-base">{t(item.name)}</a>
                        </li>
                    ))}
                </ul>
            </div>
              {/* Icon Buttons for Search, Login, Favorite, Cart */}
            <div className="hidden md:flex space-x-10 ">
                {iconData.iconItems.map((item:TIcons, index:number) => {
                    // Dynamically get the React component using the icon name from item.icon
                    const IconComponent = iconMapping[item.icon];
                    
                    return (
                    <a key={index} href={`/${locale}/${item.link}`} className="text-white text-base hover:text-gray-300">
                        <IconComponent />
                    </a>
                    );
                })}
            </div>

            {/* Language Switcher */}
            <div className="hidden md:flex space-x-4">
                <LanguageSwitcher />
            </div>
        </div>
            {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

      
      </div>

        {/* Mobile Menu */}
        <div className={`md:hidden p-4 ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
            <ul className="space-y-4 p-4">
                {menuData.menuItems.map((item:TMenu,index:number) => (
                    <li key={index}>
                        <a href={`/${locale}${item.link}`} className="hover:text-gray-300">{t(item.name)}</a>
                    </li>
                ))}
            </ul>
            <div className="flex space-x-6 p-4">
                {iconData.iconItems.map((item:TIcons, index:number) => {
                    // Dynamically get the React component using the icon name from item.icon
                    const IconComponent = iconMapping[item.icon];
                    return (
                    <a key={index} href={`/${locale}/${item.link}`} className="text-white hover:text-gray-300">
                        <IconComponent />
                    </a>
                    );
                })}
            </div>
            <div className="flex space-x-4 justify-end">
                <LanguageSwitcher />
            </div>
        </div>
    </nav>
  );
};

export default Navbar;


// 'use client';

// import { signOut, useSession } from "next-auth/react";
// import { useLocale } from "use-intl";
// import Link from "next/link";

// export default function Navbar() {
//   const { data: session } = useSession();
//   const locale = useLocale();

//   return (
//     <nav className="flex justify-between p-4 bg-gray-800 text-white">
//       <Link href={`/${locale}`}>{locale === "kh" ? "ទំព័រដើម" : "Home"}</Link>
//       {session ? (
//         <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
//           {locale === "kh" ? "ចាកចេញ" : "Logout"}
//         </button>
//       ) : (
//         <Link href={`/${locale}/auth/signin`}>
//           {locale === "kh" ? "ចូលប្រើ" : "Login"}
//         </Link>
//       )}
//     </nav>
//   );
// }

