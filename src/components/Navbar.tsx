import React from 'react'
import brandLogo from '../../public/logo.png'

export default function Navbar() {
    return (
        <nav className="sticky z-30 bg-primary-black border-b border-primary-grey top-0">
            <div className="layout flex flex-row justify-between items-center h-20">
                {/* Logo */}
                <div>
                    <img src={brandLogo} alt="logo" />
                </div>
                <div className="hidden w-full md:block md:w-auto">

                    <ul className="flex flex-col md:flex-row space-x-10 text-sm">
                        <li className="flex cursor-pointer items-center gap-2 text-white">
                            <a href="#" className=" font-medium">Block</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <li className="flex cursor-pointer items-center gap-2 text-white">
                            <a href="#" className=" font-medium">Transactions</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <li className="text-white">
                            <a href="#" className=" font-medium">Accounts</a>
                        </li>
                        <li className="text-white">
                            <a href="#" className=" font-medium">Tokens</a>
                        </li>
                        <li className="flex cursor-pointer items-center gap-2 text-white">
                            <a href="#" className=" font-medium">API’s</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <li className="flex cursor-pointer items-center gap-2 text-white">
                            <a href="#" className=" font-medium">
                                <div className="w-2 h-2 rounded-full bg-primary-green">
                                </div>
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <li className="text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
