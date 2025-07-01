import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export function ActivityChart() {
  const data = [{
    name: 'Jan',
    users: 400,
    revenue: 2400
  }, {
    name: 'Feb',
    users: 300,
    revenue: 1398
  }, {
    name: 'Mar',
    users: 500,
    revenue: 3800
  }, {
    name: 'Apr',
    users: 780,
    revenue: 3908
  }, {
    name: 'May',
    users: 890,
    revenue: 4800
  }, {
    name: 'Jun',
    users: 1390,
    revenue: 5800
  }, {
    name: 'Jul',
    users: 1490,
    revenue: 6300
  }];
  return <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Activity Overview
        </h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">
            Monthly
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">
            Weekly
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">
            Daily
          </button>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
}