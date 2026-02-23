'use client'

import { HomeIcon, LayoutDashboard, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";

const LinksSideBar = [
    { href: '/', label: 'Página Inicial', icon: HomeIcon },
    { href: '/admin', label: 'Gerenciamento', icon: LayoutDashboard },
    { href: '/', label: 'Deslogar', icon: LogOut },

]

export default function AdminSideBar() {
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false)

    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen)

    return (
        <div>
            <div className="bg-[#ffffff] sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
                <div className="flex items-center gap-2 cursor-default">
                    <Image
                        src="/logo/Logoitblue.png"
                        alt="Logo da empresa"
                        width={96}
                        height={80}
                    />
                </div>
                <Menu
                    className="text-[#06434F] size-8"
                    onClick={toggleAdminSidebar}
                />
            </div>
            <aside className={`fixed top-0 z-40 w-full sm:w-72 h-screen transition-transform ${isAdminSidebarOpen ? '' : '-translate-x-full'}
            sm:translate-x-0`}
            >
                <div className="bg-[#ffffff] h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                            <Image
                                src="/logo/Logoitblue.png"
                                alt="Logo da empresa"
                                width={100}
                                height={100}
                            />
                        </div>
                        <X
                            className="text-[#06434F] size-8 sm:hidden"
                            onClick={toggleAdminSidebar}
                        />
                    </div>
                    <div className="h-[1px] w-full bg-gray-500 my-4"/>
                    <ul className="space-y-8">
                        {LinksSideBar.map(({ href, label, icon: Icon }, index) => (
                            <li key={index}>
                                <Link
                                    href={href}
                                    className="flex items-center px-2 py-3 rounded-lg hover:bg-white/20"
                                >
                                    <Icon className="size-5 text-black-400" />
                                    <span className="ms-3 text-base text-black font-playfair">
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </aside>

        </div>
    )
}