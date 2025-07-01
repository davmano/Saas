import React from 'react';
import { UserPlusIcon, CreditCardIcon, FileTextIcon, MessageSquareIcon } from 'lucide-react';
export function RecentActivity() {
  const activities = [{
    icon: <UserPlusIcon size={16} />,
    title: 'New user registered',
    description: 'Jane Cooper',
    time: '5 min ago',
    color: 'bg-blue-100 text-blue-600'
  }, {
    icon: <CreditCardIcon size={16} />,
    title: 'New payment received',
    description: '$250.00 USD',
    time: '15 min ago',
    color: 'bg-green-100 text-green-600'
  }, {
    icon: <FileTextIcon size={16} />,
    title: 'New report available',
    description: 'Q2 Results',
    time: '1 hour ago',
    color: 'bg-purple-100 text-purple-600'
  }, {
    icon: <MessageSquareIcon size={16} />,
    title: 'New comment',
    description: 'Project discussion',
    time: '2 hours ago',
    color: 'bg-yellow-100 text-yellow-600'
  }];
  return <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => <div key={index} className="flex items-start">
            <div className={`p-2 rounded-lg mr-4 ${activity.color}`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {activity.description}
              </p>
            </div>
            <div className="text-xs text-gray-400">{activity.time}</div>
          </div>)}
      </div>
    </div>;
}