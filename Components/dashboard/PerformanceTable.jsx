import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const getStatusLight = (percentDeviation) => {
  if (percentDeviation >= -5) return { color: 'bg-emerald-500', icon: CheckCircle2, label: 'No Prazo', bgLight: 'bg-emerald-50', textColor: 'text-emerald-700' };
  if (percentDeviation >= -15) return { color: 'bg-amber-500', icon: AlertTriangle, label: 'Alerta', bgLight: 'bg-amber-50', textColor: 'text-amber-700' };
  return { color: 'bg-red-500', icon: AlertCircle, label: 'Crítico', bgLight: 'bg-red-50', textColor: 'text-red-700' };
};

const getTrendIcon = (trend) => {
  if (trend > 0) return <TrendingUp className="w-4 h-4 text-emerald-500" />;
  if (trend < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
  return <Minus className="w-4 h-4 text-slate-400" />;
};

const formatValue = (value, unit) => {
  if (unit === 'currency') return `$${value.toLocaleString()}`;
  if (unit === 'percent') return `${value}%`;
  if (unit === 'days') return `${value} days`;
  return value.toLocaleString();
};

export default function PerformanceTable({ data }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-800">Métricas de Performance</h3>
          <p className="text-sm text-slate-500 mt-1">Detalhamento de metas e realizações</p>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 border-b border-slate-100">
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Item de Controle</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Planejado</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Realizado</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider"># Desvio</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">% Desvio</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Farol</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Responsável</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Última Atualização</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider max-w-[150px]">Justificativa</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider max-w-[150px]">Ações Corretivas</TableHead>
                <TableHead className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Tendência</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => {
                const absoluteDeviation = row.achieved - row.planned;
                const percentDeviation = row.planned > 0 ? Math.round((absoluteDeviation / row.planned) * 100) : 0;
                const status = getStatusLight(percentDeviation);
                const StatusIcon = status.icon;
                
                return (
                  <motion.tr
                    key={row.id || index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <TableCell className="font-medium text-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
                        {row.type}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600 font-medium">
                      {formatValue(row.planned, row.unit)}
                    </TableCell>
                    <TableCell className="text-slate-800 font-semibold">
                      {formatValue(row.achieved, row.unit)}
                    </TableCell>
                    <TableCell className={`font-medium ${absoluteDeviation >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {absoluteDeviation >= 0 ? '+' : ''}{formatValue(absoluteDeviation, row.unit)}
                    </TableCell>
                    <TableCell>
                      <span className={`font-bold ${percentDeviation >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {percentDeviation >= 0 ? '+' : ''}{percentDeviation}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${status.color} shadow-lg animate-pulse`} />
                        <Badge variant="secondary" className={`${status.bgLight} ${status.textColor} border-0 font-medium`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {status.label}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
                          {row.responsible?.charAt(0) || 'N'}
                        </div>
                        <span className="text-sm text-slate-700">{row.responsible || 'N/A'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-500">
                      {row.last_update || 'N/A'}
                    </TableCell>
                    <TableCell className="max-w-[150px]">
                      <p className="text-xs text-slate-600 truncate" title={row.justification}>
                        {row.justification || '-'}
                      </p>
                    </TableCell>
                    <TableCell className="max-w-[150px]">
                      <p className="text-xs text-slate-600 truncate" title={row.corrective_actions}>
                        {row.corrective_actions || '-'}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(row.trend || percentDeviation)}
                        <span className={`text-xs font-medium ${
                          (row.trend || percentDeviation) > 0 ? 'text-emerald-600' : 
                          (row.trend || percentDeviation) < 0 ? 'text-red-600' : 'text-slate-400'
                        }`}>
                          {Math.abs(row.trend || percentDeviation)}%
                        </span>
                      </div>
                    </TableCell>
                  </motion.tr>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}