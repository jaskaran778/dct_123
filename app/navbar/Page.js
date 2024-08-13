"use client";
import React, { useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Menu } from "@/components/ui/Navbarmenu";
import "../css/Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar2() {
  const navRef = useRef();
  const showNavBar = () => {
      navRef.current.classList.toggle('responsive_nav'); 
  };
  return (
    <div className="navbar header top-0 left-0 w-full flex flex-wrap items-center h-fit">
      <div className="w-full logo-cont flex flex-wrap items-center">
        <div className="logo">
          <a href="https://www.linkedin.com/company/data-culture-technolgies/"
            className="mt-3 w-fit"
            target="blank">
            <Image
              src="/images/dct_logo.svg" 
              alt="DCT Logo" 
              width={85}
              height={45}
              className="ml-8 "
            />
          </a>
        </div>
        <div  className="relative w-4/5 flex items-center justify-center">
          <div ref={navRef} className=" nav w-full inset-x-0 max-w-2xl mx-auto z-50 relative flex items-center justify-center  pt-4">
            <Menu>
              <Link href="/about" className="text-sm hover:text-gray-400 pl-4 abt">About Us</Link>
              <Link href="/services" className="text-sm hover:text-gray-400">Services</Link>
              <Link href="/whoWeAre" className="text-sm hover:text-gray-400">Who We Are</Link>
              <Link href="/contact" className="text-sm hover:text-gray-400">Contact Us</Link>
              <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
              </button>
            </Menu>
          </div>
        </div>
      </div>
      <button onClick={showNavBar} className='nav-btn'>
        <FaBars />
      </button>
    </div>
  );
}
