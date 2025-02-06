// "use client";
// import React from "react";
// import Logo from "../../assets/images/VentureLogo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { FaUserAlt } from "react-icons/fa";

// function Navbar() {
//   return (
//     <>
//       <div className="flex justify-between items-center px-12 py-4 bg-black">
//         <div>
//           <Image src={Logo} />
//         </div>

//         <div className="flex gap-7 text-xl font-medium ">
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             Home
//           </Link>
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             About Us
//           </Link>
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             Services
//           </Link>
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             Portfolio
//           </Link>
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             Career
//           </Link>
//           <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
//             Contact
//           </Link>
//         </div>

//         <div>
//           <FaUserAlt size={28} color="#fff" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import Logo from "../../assets/images/VentureLogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 bg-black relative">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Venture Logo" className="md:w-full w-32" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7 text-xl font-medium">
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Home
          </Link>
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            About Us
          </Link>
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Services
          </Link>
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Portfolio
          </Link>
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Career
          </Link>
          <Link href="#" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Contact
          </Link>
        </div>

        {/* User Icon & Hamburger Menu */}
        <div className="flex items-center gap-5">
          <FaUserAlt size={28} color="#fff" className="hidden md:block" />
          <FaBars size={28} color="#fff" className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-black text-white flex flex-col items-start p-6 transition-transform">
            <FaTimes size={28} className="cursor-pointer self-end mb-5" onClick={() => setIsOpen(false)} />
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Career</Link>
            <Link href="#" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
