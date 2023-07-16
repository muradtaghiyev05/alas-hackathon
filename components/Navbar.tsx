"use client";

import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative shadow-md flex justify-center items-center h-[40px] w-full py-9 lg:px-8 z-10">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="object-cover"
            src="/alas-logo.png"
            width={120}
            height={50}
            alt="logo"
          />
        </Link>
        <div
          onClick={() => setOpen(true)}
          className="flex items-center justify-center cursor-pointer lg:hidden"
        >
          <Menu size={34} />
        </div>
        <div
          style={{ left: open ? "0%" : "-100%" }}
          className="nav-container gap-4 flex justify-center items-center"
        >
          <Link
            onClick={() => setOpen(false)}
            className="nav-link inline-block hover:after:w-full text-lg"
            href="/model1"
          >
            Model 1
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="nav-link inline-block hover:after:w-full text-lg"
            href="/model2"
          >
            Model 2
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="nav-link inline-block hover:after:w-full text-lg"
            href="/model3"
          >
            Model 3
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="nav-link inline-block hover:after:w-full text-lg"
            href="/problems"
          >
            Problems
          </Link>
          <div
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 cursor-pointer lg:hidden"
          >
            <XIcon size={34} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
