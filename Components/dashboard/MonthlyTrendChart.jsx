import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, ComposedChart } from 'recharts';
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
            <span className="font-bold text-slate-800">{item.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function MonthlyTrendChart({ data }) {
  const trendData = [
    { month: 'Jan', Realizado: 78, Meta: 80 },
    { month: 'Fev', Realizado: 82, Meta: 80 },
    { month: 'Mar', Realizado: 75, Meta: 80 },
    { month: 'Abr', Realizado: 88, Meta: 85 },
    { month: 'Mai', Realizado: 92, Meta: 85 },
    { month: 'Jun', Realizado: 85, Meta: 85 },
    { month: 'Jul', Realizado: 89, Meta: 90 },
    { month: 'Ago', Realizado: 94, Meta: 90 },
    { month: 'Set', Realizado: 91, Meta: 90 },
    { month: 'Out', Realizado: 96, Meta: 95 },
    { month: 'Nov', Realizado: 93, Meta: 95 },
    { month: 'Dez', Realizado: 98, Meta: 95 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-3xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-900/5 h-full">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Tendência Mensal</h3>
          <p className="text-sm text-slate-500">Taxa de realização ao longo do tempo</p>
        </div>
        
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={trendData}>
            <defs>
              <linearGradient id="achievementGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d9488" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#0d9488" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[60, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-sm font-medium text-slate-600">{value}</span>}
            />
            <Area 
              type="monotone" 
              dataKey="Realizado" 
              fill="url(#achievementGradient)" 
              stroke="none"
            />
            <Line 
              type="monotone" 
              dataKey="Realizado" 
              stroke="#0d9488" 
              strokeWidth={3}
              dot={{ fill: '#0d9488', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#0d9488' }}
            />
            <Line 
              type="monotone" 
              dataKey="Meta" 
              stroke="#94a3b8" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}