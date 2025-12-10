import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Building2, Filter } from 'lucide-react';

const months = [
  { value: 'Janeiro', label: 'Janeiro' },
  { value: 'Fevereiro', label: 'Fevereiro' },
  { value: 'Março', label: 'Março' },
  { value: 'Abril', label: 'Abril' },
  { value: 'Maio', label: 'Maio' },
  { value: 'Junho', label: 'Junho' },
  { value: 'Julho', label: 'Julho' },
  { value: 'Agosto', label: 'Agosto' },
  { value: 'Setembro', label: 'Setembro' },
  { value: 'Outubro', label: 'Outubro' },
  { value: 'Novembro', label: 'Novembro' },
  { value: 'Dezembro', label: 'Dezembro' },
];

const years = ['2024', '2025', '2026'];
const departments = ['Todos', 'Marketing', 'Comercial', 'Financeiro', 'Compliance', 'Operações'];

export default function DashboardFilters({ filters, onFilterChange }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl blur-xl" />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg shadow-blue-900/5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
            <Filter className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-semibold text-slate-800">Filtros</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Mês</label>
            <Select value={filters.month} onValueChange={(v) => onFilterChange('month', v)}>
              <SelectTrigger className="bg-white/80 border-slate-200/80 rounded-xl h-12 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <SelectValue placeholder="Selecione o mês" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Ano</label>
            <Select value={filters.year} onValueChange={(v) => onFilterChange('year', v)}>
              <SelectTrigger className="bg-white/80 border-slate-200/80 rounded-xl h-12 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-500" />
                  <SelectValue placeholder="Selecione o ano" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Departamento</label>
            <Select value={filters.department} onValueChange={(v) => onFilterChange('department', v)}>
              <SelectTrigger className="bg-white/80 border-slate-200/80 rounded-xl h-12 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-500" />
                  <SelectValue placeholder="Selecione o departamento" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}