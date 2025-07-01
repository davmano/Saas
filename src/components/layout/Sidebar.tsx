import React, { useState } from 'react';
import { LayoutDashboardIcon, UsersIcon, SettingsIcon, HelpCircleIcon, BarChart3Icon, LayersIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = [{
    icon: <LayoutDashboardIcon size={20} />,
    label: 'Dashboard',
    active: true
  }, {
    icon: <UsersIcon size={20} />,
    label: 'Users'
  }, {
    icon: <LayersIcon size={20} />,
    label: 'Projects'
  }, {
    icon: <BarChart3Icon size={20} />,
    label: 'Analytics'
  }, {
    icon: <SettingsIcon size={20} />,
    label: 'Settings'
  }, {
    icon: <HelpCircleIcon size={20} />,
    label: 'Help'
  }];
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };
  return <>
      {/* Mobile menu button */}
      <button className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md" onClick={toggleMobileSidebar}>
        <MenuIcon size={20} />
      </button>
      {/* Mobile overlay */}
      {mobileOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMobileSidebar} />}
      {/* Sidebar */}
      <aside className={`
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
          ${collapsed ? 'md:w-20' : 'md:w-64'} 
          fixed md:relative z-30 h-full transition-all duration-300 ease-in-out
          flex flex-col bg-white border-r border-gray-200
        `}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className={`flex items-center ${collapsed ? 'justify-center w-full' : ''}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white font-bold">
              S
            </div>
            {!collapsed && <span className="ml-3 text-lg font-semibold">SaaSly</span>}
          </div>
          <button className="hidden md:block p-1 rounded-md hover:bg-gray-100" onClick={toggleSidebar}>
            {collapsed ? <MenuIcon size={20} /> : <XIcon size={20} />}
          </button>
          <button className="md:hidden p-1 rounded-md hover:bg-gray-100" onClick={toggleMobileSidebar}>
            <XIcon size={20} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => <a key={index} href="#" className={`
                flex items-center px-3 py-3 rounded-md text-sm font-medium
                ${item.active ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}
                ${collapsed ? 'justify-center' : ''}
              `}>
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </a>)}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <a href="#" className={`
              flex items-center px-3 py-3 rounded-md text-sm font-medium text-red-600 hover:bg-red-50
              ${collapsed ? 'justify-center' : ''}
            `}>
            <LogOutIcon size={20} />
            {!collapsed && <span className="ml-3">Logout</span>}
          </a>
        </div>
      </aside>
    </>;
}