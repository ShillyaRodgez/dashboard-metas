import React from 'react';
import { motion } from 'framer-motion';

export default function KPIGauge({ title, value, target, unit, icon }) {
  const percentage = Math.min((value / target) * 100, 100);
  const isOnTarget = value <= target;
  
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference * 0.75;
  
  const getColor = () => {
    if (percentage <= 80) return { stroke: '#10b981', text: 'text-emerald-500', bg: 'bg-emerald-50' };
    if (percentage <= 100) return { stroke: '#f59e0b', text: 'text-amber-500', bg: 'bg-amber-50' };
    return { stroke: '#ef4444', text: 'text-red-500', bg: 'bg-red-50' };
  };
  
  const colors = getColor();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 rounded-3xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-900/5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
            <p className="text-xs text-slate-500">Meta: {target} {unit}</p>
          </div>
          <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
            <span className="text-lg">{icon}</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Background arc */}
            <svg className="w-full h-full transform -rotate-135" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference * 0.75}
                strokeDashoffset={0}
              />
              {/* Progress arc */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={colors.stroke}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference * 0.75}
                initial={{ strokeDashoffset: circumference * 0.75 }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            
            {/* Center value */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`text-2xl font-black ${colors.text}`}
              >
                {value}
              </motion.span>
              <span className="text-xs text-slate-500 font-medium">{unit}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isOnTarget ? 'bg-emerald-500' : 'bg-red-500'}`} />
          <span className={`text-sm font-medium ${isOnTarget ? 'text-emerald-600' : 'text-red-600'}`}>
            {isOnTarget ? 'Na Meta' : 'Acima da Meta'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}