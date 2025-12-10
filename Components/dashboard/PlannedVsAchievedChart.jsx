import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-slate-100">
        <p className="font-semibold text-slate-800 mb-2">{label}</p>
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-slate-600">{item.name}:</span>
            <span className="font-bold text-slate-800">${(item.value / 1000).toFixed(0)}K</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function PlannedVsAchievedChart({ data }) {
  const chartData = data.map(item => ({
    name: item.department?.substring(0, 3) || item.type?.substring(0, 10),
    Planned: item.planned,
    Achieved: item.achieved
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-900/5 h-full">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Planejado vs Realizado</h3>
          <p className="text-sm text-slate-500">Comparação por departamento</p>
        </div>
        
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData} barGap={8}>
            <defs>
              <linearGradient id="plannedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="achievedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${(value/1000)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-sm font-medium text-slate-600">{value}</span>}
            />
            <Bar 
              dataKey="Planned" 
              fill="url(#plannedGradient)" 
              radius={[8, 8, 0, 0]}
              maxBarSize={40}
            />
            <Bar 
              dataKey="Achieved" 
              fill="url(#achievedGradient)" 
              radius={[8, 8, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}