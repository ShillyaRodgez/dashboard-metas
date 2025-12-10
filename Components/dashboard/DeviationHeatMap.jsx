import React from 'react';
import { motion } from 'framer-motion';

const getColorForValue = (value) => {
  if (value >= 10) return '#10b981';
  if (value >= 0) return '#34d399';
  if (value >= -5) return '#fbbf24';
  if (value >= -15) return '#f97316';
  return '#ef4444';
};

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const departments = ['Marketing', 'Comercial', 'Financeiro', 'Compliance', 'Operações'];

const buildRowGradient = (values) => {
  if (!values || values.length === 0) return 'transparent';
  if (values.length === 1) return getColorForValue(values[0]);

  const step = 100 / (values.length - 1);
  const stops = values.map((value, index) => {
    const color = getColorForValue(value);
    const pos = step * index;
    return `${color} ${pos}%`;
  });

  return `linear-gradient(90deg, ${stops.join(', ')})`;
};

export default function DeviationHeatmap() {
  // Generate sample heatmap data
  const [heatmapData] = React.useState(() =>
    departments.map((dept) => ({
      department: dept,
      values: months.map(() => Math.floor(Math.random() * 40) - 15),
    })),
  );

  const [tooltip, setTooltip] = React.useState({
    visible: false,
    x: 0,
    y: 0,
    month: '',
    department: '',
    value: 0
  });

  const handleMouseEnter = (event, department, month, value) => {
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      department,
      month,
      value
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-900/5">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Mapa de Desvios</h3>
          <p className="text-sm text-slate-500">Desvio de performance mensal por departamento</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header Row */}
            <div className="flex mb-2">
              <div className="w-24 flex-shrink-0" />
              {months.map((month) => (
                <div key={month} className="flex-1 text-center text-xs font-medium text-slate-500">
                  {month}
                </div>
              ))}
            </div>

            {/* Data Rows as continuous bars */}
            {heatmapData.map((row, rowIndex) => (
              <motion.div 
                key={row.department}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * rowIndex }}
                className="flex items-center mb-2 gap-3"
              >
                <div className="w-24 flex-shrink-0 text-sm font-medium text-slate-700 truncate pr-2">
                  {row.department}
                </div>
                <div className="flex-1 relative h-8 rounded-2xl overflow-hidden border-y border-slate-900/40">
                  <div
                    className="absolute inset-0"
                    style={{ background: buildRowGradient(row.values) }}
                  />
                  <div className="relative flex h-full">
                    {row.values.map((value, colIndex) => {
                      const monthLabel = months[colIndex];
                      const displayValue = `${value > 0 ? '+' : ''}${value}%`;
                      return (
                        <div
                          key={colIndex}
                          className="flex-1 h-full cursor-pointer"
                          onMouseEnter={(event) =>
                            handleMouseEnter(event, row.department, monthLabel, value)
                          }
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Valor apenas para acessibilidade, visualmente escondido */}
                          <span className="sr-only">{displayValue}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500" />
            <span className="text-xs text-slate-500">&lt; -15%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-400" />
            <span className="text-xs text-slate-500">-15% to -5%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-300" />
            <span className="text-xs text-slate-500">-5% to 0%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-300" />
            <span className="text-xs text-slate-500">0% to 10%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-500" />
            <span className="text-xs text-slate-500">&gt; 10%</span>
          </div>
        </div>
        {tooltip.visible && (
          <div
            className="fixed z-50 px-3 py-2 rounded-lg bg-slate-900/90 text-slate-50 text-xs font-medium shadow-lg pointer-events-none"
            style={{ top: tooltip.y, left: tooltip.x + 4, transform: 'translateY(-50%)' }}
          >
            <div className="text-[10px] text-slate-300 mb-0.5">{tooltip.department}</div>
            <div className="flex items-center gap-1">
              <span>{tooltip.month}</span>
              <span>{tooltip.value > 0 ? `+${tooltip.value}%` : `${tooltip.value}%`}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}