import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Calendar, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

import DashboardFilters from '@/components/dashboard/DashboardFilters';
import DepartmentCard from '@/components/dashboard/DepartmentCard';
import PerformanceTable from '@/components/dashboard/PerformanceTable';
import PlannedVsAchievedChart from '@/components/dashboard/PlannedVsAchievedChart';
import MonthlyTrendChart from '@/components/dashboard/MonthlyTrendChart';
import DeviationHeatmap from '@/components/dashboard/DeviationHeatmap';
import KPIGauge from '@/components/dashboard/KPIGauge';

// Sample data
const departmentData = {
  Marketing: { planned: 150000, achieved: 142500, unit: 'currency', trend: [65, 72, 68, 85, 78, 95] },
  Comercial: { planned: 500000, achieved: 485000, unit: 'currency', trend: [70, 75, 82, 88, 90, 97] },
  Financeiro: { planned: 100, achieved: 98, unit: 'percent', trend: [85, 88, 90, 92, 94, 98] },
  Compliance: { planned: 100, achieved: 95, unit: 'percent', trend: [80, 82, 85, 88, 92, 95] },
  'Operações': { planned: 95, achieved: 92, unit: 'percent', trend: [75, 78, 82, 85, 88, 92] }
};

const tableData = [
  { type: 'Crescimento de Receita', department: 'Comercial', planned: 500000, achieved: 485000, unit: 'currency', responsible: 'João Silva', last_update: '15/12/2024', justification: 'Condições de mercado impactaram Q4', corrective_actions: 'Nova estratégia de vendas para Q1', trend: -3 },
  { type: 'Geração de Leads', department: 'Marketing', planned: 1500, achieved: 1680, unit: 'number', responsible: 'Maria Santos', last_update: '14/12/2024', justification: 'Campanha superou expectativas', corrective_actions: 'Escalar campanhas bem-sucedidas', trend: 12 },
  { type: 'Redução de Custos', department: 'Financeiro', planned: 15, achieved: 12, unit: 'percent', responsible: 'Carlos Oliveira', last_update: '13/12/2024', justification: 'Problemas na cadeia de suprimentos', corrective_actions: 'Negociar novos contratos', trend: -20 },
  { type: 'Auditoria de Conformidade', department: 'Compliance', planned: 100, achieved: 98, unit: 'percent', responsible: 'Ana Costa', last_update: '12/12/2024', justification: 'Pequenas lacunas de documentação', corrective_actions: 'Treinamento agendado', trend: -2 },
  { type: 'Eficiência de Produção', department: 'Operações', planned: 95, achieved: 97, unit: 'percent', responsible: 'Roberto Ferreira', last_update: '11/12/2024', justification: 'Melhorias de processo', corrective_actions: 'Continuar otimização', trend: 2 },
  { type: 'Aquisição de Clientes', department: 'Comercial', planned: 250, achieved: 230, unit: 'number', responsible: 'Paula Rodrigues', last_update: '10/12/2024', justification: 'Pressão competitiva', corrective_actions: 'Aprimorar proposta de valor', trend: -8 },
  { type: 'Reconhecimento de Marca', department: 'Marketing', planned: 80, achieved: 85, unit: 'percent', responsible: 'Daniel Martins', last_update: '09/12/2024', justification: 'Sucesso de campanha viral', corrective_actions: 'Manter momentum', trend: 6 },
  { type: 'Automação de Processos', department: 'Operações', planned: 50, achieved: 45, unit: 'percent', responsible: 'Juliana Alves', last_update: '08/12/2024', justification: 'Atrasos técnicos', corrective_actions: 'Recursos adicionais alocados', trend: -10 },
];

export default function Dashboard() {
  const [filters, setFilters] = useState({
    month: '12',
    year: '2024',
    department: 'Todos'
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredTableData = filters.department === 'Todos' 
    ? tableData 
    : tableData.filter(row => row.department === filters.department);

  const filteredDepartments = filters.department === 'Todos'
    ? Object.keys(departmentData)
    : [filters.department];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto p-6 lg:p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-lg shadow-blue-500/25">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
                Dashboard de Performance
              </h1>
            </div>
            <p className="text-slate-500 ml-14">Gestão e acompanhamento de metas por departamento</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-xl border border-white/60 shadow-sm">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">
                {new Date().toLocaleDateString('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <Button variant="outline" className="bg-white/60 backdrop-blur-xl border-white/60 rounded-xl h-10 px-4 hover:bg-white/80 transition-colors">
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-8">
          <DashboardFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Department Cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-bold text-slate-800">Visão Geral dos Departamentos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredDepartments.map((dept, index) => (
              <DepartmentCard 
                key={dept}
                department={dept}
                data={departmentData[dept]}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PlannedVsAchievedChart data={tableData} />
          <MonthlyTrendChart />
        </div>

        {/* KPI Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPIGauge 
            title="Tempo de Aprovação" 
            value={3.2} 
            target={5} 
            unit="dias" 
            icon="⏱️"
          />
          <KPIGauge 
            title="Tempo de Integração" 
            value={7.5} 
            target={10} 
            unit="dias" 
            icon="🔗"
          />
          <KPIGauge 
            title="Taxa de Resposta" 
            value={92} 
            target={95} 
            unit="%" 
            icon="📊"
          />
          <KPIGauge 
            title="Score de Qualidade" 
            value={4.5} 
            target={5} 
            unit="pts" 
            icon="⭐"
          />
        </div>

        {/* Heatmap */}
        <div className="mb-8">
          <DeviationHeatmap />
        </div>

        {/* Performance Table */}
        <PerformanceTable data={filteredTableData} />

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-400">
          Última sincronização: {new Date().toLocaleString('pt-BR')} • Dados atualizados a cada 15 minutos
        </div>
      </div>
    </div>
  );
}