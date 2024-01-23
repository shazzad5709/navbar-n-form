'use client'
import { useState } from "react";

import NavBarMobile from "../ui/NavBarMobile.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import NavBar from "../ui/NavBar.jsx";
import Cart from "../ui/Cart.jsx";
import Link from 'next/link';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <header className="relative !z-[1000]">
            <div className="px-4 py-2 flex items-center justify-between lg:px-8">
                <div className="hidden lg:block">
                    <NavBar />
                </div>
                <div className="lg:hidden">
                    <NavBarMobile />
                </div>
                <Link href="#">
                    <img src="/images/logo_richie_rich_black.png" alt="logo" className="hidden w-20 object-contain lg:block" />
                    <img src="/images/logo_mobile_r_black.png" alt="logo" className="block w-8 lg:hidden" />
                </Link>

                {/* Right Top bar */}
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-1 cursor-pointer mt-1">
                        <SearchIcon />
                        <p className="text-sm">Look For</p>
                    </div>
                    <button className="hidden lg:block relative" onClick={() => setIsCartOpen(true)}>
                        <img className="h-6 w-6" src="/images/bag.png" alt="" />
                        <span className="text-xs font-medium absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-[2px] ">0</span>
                    </button>

                    <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

                </div>
            </div>
        </header>
    )
}