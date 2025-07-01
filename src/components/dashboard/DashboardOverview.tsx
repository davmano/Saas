import React from 'react';
import { StatCard } from './StatCard';
import { ActivityChart } from './ActivityChart';
import { RecentActivity } from './RecentActivity';
import { UsersList } from './UsersList';
import { UsersIcon, ActivityIcon, DollarSignIcon, TrendingUpIcon } from 'lucide-react';
export function DashboardOverview() {
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="2,543" change="+12.5%" trend="up" icon={<UsersIcon />} />
        <StatCard title="Active Sessions" value="1,832" change="+8.2%" trend="up" icon={<ActivityIcon />} />
        <StatCard title="Revenue" value="$45,231" change="+5.4%" trend="up" icon={<DollarSignIcon />} />
        <StatCard title="Growth" value="24.3%" change="-2.1%" trend="down" icon={<TrendingUpIcon />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <ActivityChart />
        </div>
        <div className="bg-white rounded-lg shadow">
          <RecentActivity />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <UsersList />
      </div>
    </div>;
}