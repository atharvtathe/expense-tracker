import React, {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

const Navbarcomp = () => {

    const [ishamopen, Sethamopen] = useState(false);

    const hamopener = () => {
        if(ishamopen){
            Sethamopen(false);
        }
        else{
            Sethamopen(true);
        }
    }

    return (
    <div className="fixed top-0 w-full z-30 ">

        <nav className="relative w-full bg-white border-b px-4 lg:px-28 py-4 flex flex-row justify-between items-center ">
        <div>
            <Link href="/">
            <a>
                <div className="flex flex-row items-center ">
                <div className="w-10 h-10">
                <Image src="/budget.png" alt=" logo" width={40} height={40} className="object-contain"/>
                </div>
                <div className="font-extrabold sm:text-3xl text-2xl">
                    Expense Tracker
                </div>
                </div>
            </a>
            </Link>
        </div>
        <ul className="flex flex-row space-x-4 items-center list-none pl-0 mx-0">
            <li className="hidden md:block ">
            <Link href="#">
                <a>
                <span className="font-medium  rounded font-sans text-sm text-gray-600 py-1 px-2 hover:bg-gray-100">Blogs</span> 
                </a>
            </Link>
            </li>

            <li className="hidden md:block ">
            <Link href="#">
                <a>
                <span className="font-medium  rounded font-sans text-sm text-gray-600 py-1 px-2 hover:bg-gray-100">About</span> 
                </a>
            </Link>
            </li>

            <li className="hidden md:block ">
                <Link href="#">
                    <a>
                    <span className="font-medium  rounded font-sans text-sm text-gray-600 py-1 px-2 hover:bg-gray-100">Login</span> 
                    </a>
                </Link>
            </li>

            {/* desktop nav end and mobile starts */}

            <li className="block md:hidden ">
            <span className="font-extrabold  rounded font-sans text-sm text-gray-600 py-1 px-2 hover:bg-gray-100 cursor-pointer" onClick={hamopener}>{ ishamopen ? (<span className="text-xs">✖️</span> ) : (<span>☰</span> )}</span> 
            </li>
        </ul>


            {ishamopen && <ul className="flex flex-col list-none w-64 mx-0 md:hidden absolute top-16 right-0 border px-1 py-1  z-30 bg-white rounded shadow-lg">
                <li className=" ">
                <Link href="#">
                    <a>
                    <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">Blogs</span> 
                    </a>
                </Link>
                </li>

                <li className="">
                <Link href="#">
                    <a>
                    <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">About</span> 
                    </a>
                </Link>
                </li>

                <li className="">
                <Link href="#">
                    <a>
                    <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">Login</span> 
                    </a>
                </Link>
                </li>


            </ul>}

        </nav>
    </div>
    )
}

export default Navbarcomp;