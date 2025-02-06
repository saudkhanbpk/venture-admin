"use client";
import React from "react";
import Logo from "../../assets/images/VentureLogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-12 py-4 bg-black">
        <div>
          <Image src={Logo} />
        </div>

        <div className="flex gap-7 text-xl font-medium ">
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Home
          </Link>
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            About Us
          </Link>
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Services
          </Link>
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Portfolio
          </Link>
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Career
          </Link>
          <Link href="" className="text-white border-b-2 border-transparent hover:border-white inline-block">
            Contact
          </Link>
        </div>

        <div>
          <FaUserAlt size={28} color="#fff" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
