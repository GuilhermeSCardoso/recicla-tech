import { Battery, Smartphone, Lightbulb, Pill, CookingPot, ExternalLink, AlertTriangle } from 'lucide-react';
import { officialLinks } from '@/data/links';

interface DisposalCategory {
  id: string;
  icon: typeof Battery;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
  guidance: string;
  warning: string;
}

const categories: DisposalCategory[] = [
  {
    id: 'pilhas-baterias',
    icon: Battery,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    title: 'Pilhas e Baterias',
    description:
      'Pilhas e baterias contêm metais pesados como mercúrio, cádmio e chumbo. Se descartadas no lixo comum, podem contaminar o solo e a água.',
    guidance:
      'Leve a pontos de coleta específicos em supermercados, bancos, lojas de eletrônicos ou Ecopontos. Muitos estabelecimentos mantêm coletores na entrada.',
    warning: 'Nunca jogue pilhas e baterias no lixo comum ou na natureza.',
  },
  {
    id: 'eletronicos',
    icon: Smartphone,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    title: 'Equipamentos Eletrônicos',
    description:
      'Celulares, computadores, carregadores e cabos contêm materiais valiosos (cobre, ouro, prata) e substâncias tóxicas. O lixo eletrônico é o resíduo que mais cresce no mundo.',
    guidance:
      'Procure pontos de entrega voluntária (PEV) de programas de logística reversa, como os da Green Eletron. Em Indaiatuba, os Ecopontos também recebem eletrônicos.',
    warning: 'Não descarte eletrônicos no lixo domiciliar comum.',
  },
  {
    id: 'luminarias',
    icon: Lightbulb,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    title: 'Lâmpadas',
    description:
      'Lâmpadas fluorescentes e vapor metálico contêm mercúrio, uma substância tóxica. Lâmpadas LED, embora não tenham mercúrio, também têm componentes que precisam de descarte adequado.',
    guidance:
      'Leve a pontos de coleta de eletrônicos ou Ecopontos. Embale com cuidado para evitar quebra durante o transporte.',
    warning: 'Nunca jogue lâmpadas fluorescentes no lixo comum — o mercúrio pode se espalhar.',
  },
  {
    id: 'medicamentos',
    icon: Pill,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    title: 'Medicamentos Vencidos',
    description:
      'Medicamentos vencidos ou em desuso são classificados como resíduos perigosos. Descartados incorretamente, podem contaminar o solo, a água e atingir o ciclo alimentar.',
    guidance:
      'Leve a pontos de coleta em farmácias, postos de saúde ou programas específicos de descarte de medicamentos. Em Indaiatuba, consulte o sistema EcoMed.',
    warning: 'Nunca descarte medicamentos na pia, no vaso sanitário ou no lixo comum.',
  },
  {
    id: 'oleo-cozinha',
    icon: CookingPot,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    title: 'Óleo de Cozinha',
    description:
      'Um litro de óleo de cozinha pode contaminar até 25 mil litros de água. Quando jogado na pia, entope encanamentos e chega aos rios, formando uma camada que impede a oxigenação da água.',
    guidance:
      'Armazene o óleo usado em garrafa PET fechada e leve a pontos de coleta. O óleo pode ser transformado em biodiesel, sabão e outros produtos.',
    warning: 'Nunca jogue óleo de cozinha na pia, no vaso sanitário ou no lixo comum.',
  },
];

export function ResponsibleDisposal() {
  return (
    <section id="descarte" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Descarte Consciente</h2>
          <p className="section-subtitle mx-auto text-center">
            Alguns resíduos não podem ir na coleta comum. Cada categoria abaixo exige um
            canal de descarte específico para proteger o meio ambiente e a saúde pública.
          </p>
        </div>

        {/* Aviso principal */}
        <div className="max-w-3xl mx-auto mb-10 flex items-start gap-3 p-5 bg-amber-50 rounded-2xl border-2 border-amber-200">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Importante:</strong> não coloque resíduos especiais (pilhas, eletrônicos,
            lâmpadas, medicamentos, óleo) na coleta seletiva comum sem antes verificar as
            orientações locais. O descarte incorreto pode contaminar outros materiais recicláveis
            e causar danos ambientais.
          </p>
        </div>

        {/* Cartões de categorias especiais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className={`card card-hover ${cat.bgColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-6 h-6 ${cat.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-800">{cat.title}</h3>
                </div>
                <p className="text-sm text-brand-800/70 mb-4 leading-relaxed">{cat.description}</p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1">Como descartar</p>
                  <p className="text-sm text-brand-800/80 leading-relaxed">{cat.guidance}</p>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white/70 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-amber-800">{cat.warning}</p>
                </div>
              </div>
            );
          })}

          {/* Card de links oficiais */}
          <div className="card bg-brand-50 border-brand-200">
            <h3 className="text-lg font-bold text-brand-800 mb-3">Pontos de recebimento</h3>
            <p className="text-sm text-brand-800/70 mb-4 leading-relaxed">
              Consulte fontes oficiais para localizar pontos de descarte em Indaiatuba/SP e região:
            </p>
            <ul className="space-y-3">
              {officialLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-sm text-brand-700 hover:text-brand-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">{link.title}</span>
                      <span className="block text-xs text-brand-600/60 mt-0.5">{link.description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
