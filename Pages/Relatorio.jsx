import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layout, BarChart3, LineChart, Grid3x3, Gauge, Filter, TrendingUp, CheckCircle, Eye, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Relatorio() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-lg shadow-blue-500/25">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
                Relatório do Dashboard
              </h1>
            </div>
            <p className="text-slate-500 ml-14">Documentação completa do sistema de gestão de metas</p>
          </div>
          
          <Button 
            onClick={handlePrint}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 rounded-xl h-11 px-6 shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introdução</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                O <span className="font-semibold text-slate-800">Dashboard de Performance</span> é uma solução empresarial moderna e completa 
                para gestão e acompanhamento de metas organizacionais. Desenvolvido com tecnologias de ponta e design responsivo, 
                o sistema oferece uma visão holística do desempenho de múltiplos departamentos em tempo real.
              </p>
              <p>
                Este relatório documenta todas as funcionalidades, componentes visuais e recursos técnicos implementados, 
                servindo como guia completo para usuários, gestores e equipe técnica.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Objetivos do Sistema</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Transparência</h3>
                  <p className="text-sm text-slate-600">Visibilidade completa das metas e resultados em todos os níveis organizacionais.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Acompanhamento</h3>
                  <p className="text-sm text-slate-600">Monitoramento contínuo de KPIs e identificação rápida de desvios.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Visualização</h3>
                  <p className="text-sm text-slate-600">Apresentação intuitiva de dados complexos através de gráficos e indicadores visuais.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Análise</h3>
                  <p className="text-sm text-slate-600">Ferramentas analíticas para tomada de decisão baseada em dados concretos.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Departamentos Monitorados</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'Marketing', icon: '📣', color: 'from-pink-500 to-rose-500', desc: 'Campanhas e branding' },
                { name: 'Comercial', icon: '💼', color: 'from-blue-500 to-indigo-500', desc: 'Vendas e receita' },
                { name: 'Financeiro', icon: '💰', color: 'from-emerald-500 to-teal-500', desc: 'Controles financeiros' },
                { name: 'Compliance', icon: '📋', color: 'from-amber-500 to-orange-500', desc: 'Conformidade legal' },
                { name: 'Operações', icon: '⚙️', color: 'from-violet-500 to-purple-500', desc: 'Processos internos' }
              ].map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} mx-auto mb-3 flex items-center justify-center text-3xl shadow-lg`}>
                    {dept.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{dept.name}</h3>
                  <p className="text-xs text-slate-500">{dept.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Componentes do Dashboard</h2>
            
            <div className="space-y-6">
              {/* Filters */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Filter className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">4.1. Filtros Avançados</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="leading-relaxed">
                    Sistema de filtragem com três dimensões principais permitindo análise customizada dos dados:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><span className="font-semibold">Mês:</span> Seleção entre Janeiro e Dezembro</li>
                    <li><span className="font-semibold">Ano:</span> Visualização de múltiplos períodos anuais</li>
                    <li><span className="font-semibold">Departamento:</span> Foco específico ou visão geral (Todos)</li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-3 rounded-lg mt-3">
                    <span className="font-semibold text-blue-800">💡 Destaque:</span> Interface com glassmorphism 
                    e ícones intuitivos para navegação rápida.
                  </p>
                </div>
              </div>

              {/* Department Cards */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Layout className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">4.2. Cards Departamentais</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="leading-relaxed">
                    Cinco cards interativos apresentando visão consolidada de cada departamento:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mt-3">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-1">📊 Percentual de Metas Atingidas</p>
                      <p className="text-sm">Indicador principal com barra de progresso animada</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-1">📈 KPIs Principais</p>
                      <p className="text-sm">Valores planejados vs realizados em cards destacados</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-1">📉 Gráfico de Tendência</p>
                      <p className="text-sm">Sparkline mostrando evolução dos últimos 6 períodos</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-1">📊 Comparação Visual</p>
                      <p className="text-sm">Mini gráfico de barras com código de cores</p>
                    </div>
                  </div>
                  <p className="text-sm bg-emerald-50 p-3 rounded-lg mt-3">
                    <span className="font-semibold text-emerald-800">✨ Recursos:</span> Animações suaves, 
                    cores específicas por departamento, e botão "Ver Detalhes" para drill-down.
                  </p>
                </div>
              </div>

              {/* Performance Table */}
              <div className="border-l-4 border-violet-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-violet-100 rounded-lg">
                    <Grid3x3 className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">4.3. Tabela de Performance</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="leading-relaxed">
                    Tabela detalhada com 11 colunas informativas para análise granular:
                  </p>
                  <div className="grid md:grid-cols-3 gap-2 mt-3 text-sm">
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Tipo:</span> Categoria da meta</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Planejado:</span> Meta estabelecida</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Realizado:</span> Valor alcançado</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold"># Desvio:</span> Diferença absoluta</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">% Desvio:</span> Diferença percentual</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Farol:</span> Status visual (🟢🟡🔴)</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Responsável:</span> Gestor da meta</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Última Atualização:</span> Data</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Justificativa:</span> Explicação</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Ações Corretivas:</span> Plano</div>
                    <div className="bg-slate-50 p-2 rounded">• <span className="font-semibold">Tendência:</span> Direção</div>
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg mt-3 space-y-2">
                    <p className="font-semibold text-violet-800">🚦 Sistema de Farol (Status Light):</p>
                    <div className="grid md:grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span><span className="font-semibold">Verde:</span> Desvio ≥ -5%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span><span className="font-semibold">Amarelo:</span> -15% ≤ Desvio &lt; -5%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span><span className="font-semibold">Vermelho:</span> Desvio &lt; -15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">4.4. Gráficos Analíticos</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="font-semibold text-indigo-800 mb-2">📊 Gráfico de Barras - Planejado vs Realizado</p>
                    <p className="text-sm">Comparação visual lado a lado com gradientes personalizados e tooltips interativos.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="font-semibold text-teal-800 mb-2">📈 Gráfico de Linha - Tendência Mensal</p>
                    <p className="text-sm">Visualização temporal com área preenchida, mostrando evolução ao longo de 12 meses.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-800 mb-2">🗺️ Mapa de Calor - Desvios</p>
                    <p className="text-sm">Heatmap interativo com células coloridas representando performance mensal por departamento.</p>
                  </div>
                </div>
              </div>

              {/* KPI Gauges */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Gauge className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">4.5. Medidores de KPI</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="leading-relaxed">
                    Quatro medidores circulares (gauges) para indicadores críticos:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mt-3">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">⏱️ Tempo de Aprovação</p>
                      <p className="text-sm">Meta: 5 dias | Atual: 3.2 dias</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">🔗 Tempo de Integração</p>
                      <p className="text-sm">Meta: 10 dias | Atual: 7.5 dias</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">📊 Taxa de Resposta</p>
                      <p className="text-sm">Meta: 95% | Atual: 92%</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">⭐ Score de Qualidade</p>
                      <p className="text-sm">Meta: 5 pts | Atual: 4.5 pts</p>
                    </div>
                  </div>
                  <p className="text-sm bg-amber-50 p-3 rounded-lg mt-3">
                    <span className="font-semibold text-amber-800">🎨 Design:</span> Animações de progresso circular 
                    com indicadores de status (Na Meta / Acima da Meta) e código de cores inteligente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Características Técnicas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 text-lg mb-3">🎨 Design & UX</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p><span className="font-semibold">Neumorphism + Glassmorphism:</span> Efeitos modernos de vidro e sombras suaves</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p><span className="font-semibold">Paleta Corporativa:</span> Azul e verde-água como cores principais</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p><span className="font-semibold">Design Responsivo:</span> Adaptação perfeita para desktop, tablet e mobile</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p><span className="font-semibold">Tipografia Limpa:</span> Hierarquia clara e legibilidade otimizada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p><span className="font-semibold">Alto Contraste:</span> Acessibilidade e facilidade de leitura</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 text-lg mb-3">⚡ Performance & Interatividade</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                    <p><span className="font-semibold">Animações Framer Motion:</span> Transições suaves e fluidas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                    <p><span className="font-semibold">Gráficos Recharts:</span> Visualizações interativas e responsivas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                    <p><span className="font-semibold">Hover States:</span> Feedback visual em todos os elementos clicáveis</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                    <p><span className="font-semibold">Loading States:</span> Indicadores de carregamento com skeleton</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                    <p><span className="font-semibold">Real-time Updates:</span> Atualização automática a cada 15 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">6. Modelo de Dados</h2>
            
            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                O sistema utiliza uma entidade <span className="font-mono bg-slate-100 px-2 py-1 rounded text-sm">Goal</span> para 
                armazenar todas as informações de metas:
              </p>
              
              <div className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto">
                <pre className="text-sm">
{`{
  "type": "string",              // Tipo de meta/KPI
  "department": "enum",          // Marketing | Comercial | Financeiro | 
                                 // Compliance | Operações
  "month": "number",             // 1-12
  "year": "number",              // Ano
  "planned": "number",           // Valor planejado
  "achieved": "number",          // Valor realizado
  "unit": "enum",                // currency | percent | number | days
  "responsible": "string",       // Responsável
  "justification": "string",     // Justificativa
  "corrective_actions": "string",// Ações corretivas
  "last_update": "date"          // Data de atualização
}`}
                </pre>
              </div>

              <p className="text-sm bg-cyan-50 p-3 rounded-lg">
                <span className="font-semibold text-cyan-800">💾 Campos Automáticos:</span> O sistema adiciona automaticamente 
                id, created_date, updated_date e created_by para rastreabilidade completa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">7. Casos de Uso</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-slate-800 mb-2">👔 Executivo C-Level</h3>
                <p className="text-sm text-slate-600">
                  Visualização estratégica consolidada de todos os departamentos, identificação rápida de áreas críticas, 
                  e tomada de decisão baseada em tendências históricas.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-slate-800 mb-2">👨‍💼 Gerente de Departamento</h3>
                <p className="text-sm text-slate-600">
                  Acompanhamento detalhado das metas específicas do departamento, análise de desvios individuais, 
                  documentação de justificativas e ações corretivas.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <h3 className="font-bold text-slate-800 mb-2">📊 Analista de Dados</h3>
                <p className="text-sm text-slate-600">
                  Extração de insights através dos múltiplos gráficos, análise comparativa entre períodos, 
                  identificação de padrões no mapa de calor.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-500 pl-4 py-2">
                <h3 className="font-bold text-slate-800 mb-2">🎯 Time de Performance</h3>
                <p className="text-sm text-slate-600">
                  Monitoramento contínuo através do sistema de farol, rastreamento de responsáveis, 
                  e gestão de ações corretivas para garantir compliance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">8. Benefícios Esperados</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg">
                  📈
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Produtividade +30%</h3>
                <p className="text-sm text-slate-600">Redução do tempo em reuniões de status e relatórios manuais</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg">
                  🎯
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Precisão +40%</h3>
                <p className="text-sm text-slate-600">Dados em tempo real eliminam defasagem e erros de consolidação</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg">
                  ⚡
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Velocidade 5x</h3>
                <p className="text-sm text-slate-600">Tomada de decisão acelerada com visualização instantânea</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-700/5 rounded-3xl" />
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Conclusão</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                O Dashboard de Performance representa uma solução completa e moderna para gestão empresarial de metas. 
                Através da combinação de visualizações intuitivas, dados em tempo real e interface de última geração, 
                o sistema capacita gestores e executivos a tomarem decisões informadas e ágeis.
              </p>
              <p>
                Com foco em usabilidade, performance e design empresarial, o dashboard estabelece um novo padrão 
                para ferramentas de business intelligence, promovendo transparência, accountability e excelência operacional 
                em toda a organização.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-500 mt-6">
                <p className="font-semibold text-slate-800 mb-2">🚀 Próximos Passos</p>
                <p className="text-sm">
                  O sistema está pronto para implantação e pode ser expandido com funcionalidades adicionais como 
                  exportação de relatórios PDF, notificações automáticas, integração com sistemas ERP, 
                  e dashboards personalizados por usuário.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-400 space-y-2">
          <p>Dashboard de Performance - Relatório Técnico Completo</p>
          <p>Versão 1.0 • {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .fixed { display: none; }
          body { background: white; }
          button { display: none; }
        }
      `}</style>
    </div>
  );
}