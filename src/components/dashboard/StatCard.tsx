import React from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: ReactNode;
}
export function StatCard({
  title,
  value,
  change,
  trend,
  icon
}: StatCardProps) {
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {trend === 'up' ? <TrendingUpIcon size={16} className="text-green-500" /> : <TrendingDownIcon size={16} className="text-red-500" />}
        <span className={`text-sm ml-1 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">from last month</span>
      </div>
    </div>;
}