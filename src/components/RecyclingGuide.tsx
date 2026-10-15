import { useState, useMemo } from 'react';
import { Search, AlertCircle, CheckCircle2 } from 'lucide-react';
import { materials, recyclingCategories } from '@/data/materials';

export function RecyclingGuide() {
  const [query, setQuery] = useState('');

  const filteredMaterials = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return materials.filter((m) => m.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="guia" className="section-padding bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Guia de Reciclagem</h2>
          <p className="section-subtitle mx-auto text-center">
            Conheça as principais categorias de recicláveis, exemplos de cada uma e como
            preparar os materiais corretamente.
          </p>
        </div>

        {/* Cartões de categorias */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recyclingCategories.map((cat) => (
            <div
              key={cat.id}
              className={`card card-hover ${cat.bgColor} ${cat.borderColor}`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{cat.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${cat.color}`}>{cat.title}</h3>
              <p className="text-sm text-brand-800/70 mb-4 leading-relaxed">{cat.description}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-2">Exemplos</p>
                <ul className="space-y-1">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="text-sm text-brand-800/80 flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5" aria-hidden="true">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-2">Dicas</p>
                <ul className="space-y-1">
                  {cat.tips.map((tip) => (
                    <li key={tip} className="text-sm text-brand-800/70 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Busca de materiais */}
        <div className="card max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-brand-800 mb-2">Encontre um material</h3>
          <p className="text-sm text-brand-700/70 mb-4">
            Digite o nome do material para descobrir em qual categoria ele se enquadra.
          </p>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: garrafa pet, caixa de papelão, lata..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-brand-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 text-brand-900 placeholder:text-brand-400 transition-colors"
              aria-label="Buscar material reciclável"
            />
          </div>

          {/* Resultados da busca */}
          {query.trim() && (
            <div className="mt-4 animate-fade-in">
              {filteredMaterials.length > 0 ? (
                <div className="space-y-3">
                  {filteredMaterials.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl border border-brand-100"
                    >
                      <span className="text-2xl" aria-hidden="true">{m.emoji}</span>
                      <div>
                        <p className="font-semibold text-brand-800 capitalize">{m.name}</p>
                        <p className="text-sm text-brand-600">
                          Categoria: <span className="font-medium">{m.categoryLabel}</span>
                        </p>
                        <p className="text-xs text-brand-700/70 mt-1">{m.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-amber-800">
                    Material não encontrado no nosso guia. Tente outro termo ou consulte as categorias acima.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Aviso sobre regras locais */}
        <div className="mt-8 max-w-3xl mx-auto flex items-start gap-3 p-4 bg-brand-50 rounded-xl border border-brand-200">
          <AlertCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-brand-800">
            <strong>Atenção:</strong> a aceitação de resíduos pode variar conforme as regras
            locais de coleta seletiva do seu município. Consulte sempre as orientações da
            prefeitura ou da cooperativa da sua região.
          </p>
        </div>
      </div>
    </section>
  );
}
