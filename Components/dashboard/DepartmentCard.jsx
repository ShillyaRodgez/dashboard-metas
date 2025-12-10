import React from 'react';
import { LineChart, Line, BarChart, Bar, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown, Target, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const departmentIcons = {
  Marketing: '📣',
  Comercial: '💼',
  Financeiro: '💰',
  Compliance: '📋',
  'Operações': '⚙️'
};

const departmentColors = {
  Marketing: { from: 'from-pink-500', to: 'to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600' },
  Comercial: { from: 'from-blue-500', to: 'to-indigo-500', bg: 'bg-blue-50', text: 'text-blue-600' },
  Financeiro: { from: 'from-emerald-500', to: 'to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  Compliance: { from: 'from-amber-500', to: 'to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600' },
  'Operações': { from: 'from-violet-500', to: 'to-purple-500', bg: 'bg-violet-50', text: 'text-violet-600' }
};

export default function DepartmentCard({ department, data, index }) {
  const colors = departmentColors[department] || departmentColors.Marketing;
  const icon = departmentIcons[department] || '📊';
  
  const achievementRate = data.planned > 0 ? Math.round((data.achieved / data.planned) * 100) : 0;
  const isPositive = achievementRate >= 90;
  
  const sparklineData = data.trend || [
    { value: 65 }, { value: 72 }, { value: 68 }, { value: 85 }, { value: 78 }, { value: achievementRate }
  ];
  
  const comparisonData = [
    { name: 'Planned', value: data.planned },
    { name: 'Achieved', value: data.achieved }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl" />
      
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center text-2xl shadow-lg`}>
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{department}</h3>
              <p className="text-xs text-slate-500">Visão Geral de Performance</p>
            </div>
          </div>
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span className="text-xs font-semibold">{isPositive ? '+' : ''}{achievementRate - 100}%</span>
          </div>
        </div>

        {/* Achievement Rate */}
        <div className="mb-6">
          <div className="flex items-end justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Metas Atingidas</span>
            <span className={`text-3xl font-black ${colors.text}`}>{achievementRate}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(achievementRate, 100)}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${colors.from} ${colors.to} rounded-full`}
            />
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`${colors.bg} rounded-xl p-3`}>
            <div className="flex items-center gap-1.5 mb-1">
              <Target className={`w-3.5 h-3.5 ${colors.text}`} />
              <span className="text-xs font-medium text-slate-600">Planejado</span>
            </div>
            <p className={`text-lg font-bold ${colors.text}`}>
              {data.unit === 'currency' ? `$${(data.planned/1000).toFixed(0)}K` : data.planned}
            </p>
          </div>
          <div className={`${colors.bg} rounded-xl p-3`}>
            <div className="flex items-center gap-1.5 mb-1">
              <BarChart3 className={`w-3.5 h-3.5 ${colors.text}`} />
              <span className="text-xs font-medium text-slate-600">Realizado</span>
            </div>
            <p className={`text-lg font-bold ${colors.text}`}>
              {data.unit === 'currency' ? `$${(data.achieved/1000).toFixed(0)}K` : data.achieved}
            </p>
          </div>
        </div>

        {/* Mini Charts */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Sparkline */}
          <div className="bg-slate-50/80 rounded-xl p-3">
            <span className="text-xs font-medium text-slate-500 mb-2 block">Tendência</span>
            <ResponsiveContainer width="100%" height={40}>
              <LineChart data={sparklineData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={isPositive ? '#10b981' : '#ef4444'} 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Mini Bar */}
          <div className="bg-slate-50/80 rounded-xl p-3">
            <span className="text-xs font-medium text-slate-500 mb-2 block">Comparação</span>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: '100%' }} />
                </div>
                <span className="text-xs font-semibold text-slate-600 w-10 text-right">100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${isPositive ? 'bg-emerald-500' : 'bg-red-500'}`} 
                    style={{ width: `${Math.min(achievementRate, 100)}%` }} 
                  />
                </div>
                <span className={`text-xs font-semibold w-10 text-right ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                  {achievementRate}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Button 
          variant="ghost" 
          className={`w-full h-11 rounded-xl ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity group/btn`}
        >
          <span className="font-semibold">Ver Detalhes</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}