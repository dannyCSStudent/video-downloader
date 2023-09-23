

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo, youtube } from "@/public/assets";
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black- py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-16">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        <RxHamburgerMenu className="h-[50px] w-[40px] block md:hidden" />
        
        
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li>
            <Link href="/" target="_blank">
              <Image
                src={youtube}
                alt="youtube-logo"
                width={55}
                height={40}
              />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <Image
                src={youtube}
                alt="youtube-logo"
                width={55}
                height={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
