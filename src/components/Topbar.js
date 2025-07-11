"use client"
import { FiSearch, FiBell } from "react-icons/fi"
import { HiOutlineChevronDown } from "react-icons/hi"
import { BsGrid3X3Gap } from "react-icons/bs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Topbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-2xl rounded-md ">
      {/* Logo */}
      <div className="flex items-center w-[20%]">
        <div className="text-cyan-400 font-bold text-xl">
          Property Tax Plus
          <span className="text-cyan-400 text-sm align-super">+</span>
        </div>
        <div className="text-cyan-400 text-xs ml-1 font-medium">APPEALS</div>
      </div>

      {/* Client Workspace Dropdown */}
      <div className="flex items-center ms-32">
        <span className="text-gray-600 font-bold text-sm mr-3">Client Workspace:</span>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center border-2 border-gray-100  gap-2 p-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🏠</span>
              </div>
              <HiOutlineChevronDown className="w-4 h-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Workspace 1</DropdownMenuItem>
            <DropdownMenuItem>Workspace 2</DropdownMenuItem>
            <DropdownMenuItem>Workspace 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        {/* User Avatar with Orange Background */}
        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">🏠</span>
        </div>

        {/* Divider */}

        {/* User Initials Avatar */}
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-blue-400 text-white text-sm font-medium">AK</AvatarFallback>
        </Avatar>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-400 mx-2" />

        {/* Notification Bell */}
        <Button variant="ghost" size="sm" className="p-2">
          <FiBell className="w-5 h-5 text-gray-600" />
        </Button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-400 mx-2" />

        {/* Grid Menu */}
        <Button variant="ghost" size="sm" className="p-2">
          <BsGrid3X3Gap className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </nav>
  )
}
