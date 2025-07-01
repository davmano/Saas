import React from 'react';
import { BellIcon, SearchIcon } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
export function Header() {
  return <header className="h-16 px-4 md:px-6 border-b border-gray-200 bg-white flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="hidden md:flex items-center border rounded-md bg-gray-50 px-3 py-1.5">
        <SearchIcon size={18} className="text-gray-400" />
        <input type="text" placeholder="Search..." className="ml-2 bg-transparent border-none focus:outline-none text-sm w-48" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" size="sm" />
          <div className="hidden md:block ml-2">
            <p className="text-sm font-medium text-gray-700">Alex Johnson</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>;
}