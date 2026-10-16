import { Bug, Scissors, Stethoscope, Trash, HeartPulse } from 'lucide-react';

const risks = [
  {
    icon: Bug,
    title: 'Criadouros de mosquitos',
    description:
      'Resíduos acumulados em terrenos baldios ou calçadas, como pneus, garrafas e tampas, podem acumular água da chuva. Essa água parada é o ambiente ideal para a proliferação do mosquito Aedes aegypti, transmissor da dengue, zika e chikungunya.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Scissors,
    title: 'Materiais cortantes',
    description:
      'Cacos de vidro, latas com bordas afiadas e pregos descartados incorretamente representam risco de cortes para trabalhadores da coleta, crianças que brincam na rua e animais. Embale materiais cortantes em papel grosso antes de descartar.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Stethoscope,
    title: 'Contaminação do solo e da água',
    description:
      'Pilhas, baterias, medicamentos e produtos químicos jogados no lixo comum liberam substâncias tóxicas no solo e na água. Esses contaminantes podem afetar plantas, animais e pessoas através da cadeia alimentar ao longo do tempo.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export function EnvironmentHealth() {
  return (
    <section id="saude" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Meio Ambiente e Saúde</h2>
          <p className="section-subtitle mx-auto text-center">
            O acúmulo inadequado de resíduos não é apenas um problema visual — ele traz riscos
            reais para a saúde da comunidade. Conheça os principais e como prevenir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <div key={risk.title} className={`card card-hover ${risk.bgColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-6 h-6 ${risk.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-800">{risk.title}</h3>
                </div>
                <p className="text-sm text-brand-800/70 leading-relaxed">{risk.description}</p>
              </div>
            );
          })}
        </div>

        {/* Qualidade de vida */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="card bg-brand-50 border-brand-200">
            <div className="flex items-center gap-3 mb-4">
              <Trash className="w-6 h-6 text-brand-600" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-800">Limpeza urbana e prevenção</h3>
            </div>
            <p className="text-brand-800/80 leading-relaxed mb-3">
              A limpeza urbana vai muito além de deixar a cidade bonita. Ruas e terrenos limpos
              reduzem a proliferação de vetores (ratos, insetos, mosquitos), evitam entupimento de
              bueiros e galerias pluviais e previnem enchentes.
            </p>
            <p className="text-brand-800/80 leading-relaxed">
              Cada morador tem um papel: descartar o lixo no local e horário corretos, não jogar
              resíduos na rua e manter a calçada limpa são atitudes que beneficiam toda a comunidade.
            </p>
          </div>

          <div className="card bg-beige-100 border-beige-300">
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="w-6 h-6 text-accent-500" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-800">Qualidade de vida</h3>
            </div>
            <p className="text-brand-800/80 leading-relaxed mb-3">
              Um ambiente limpo e livre de resíduos acumulados contribui diretamente para a
              qualidade de vida da comunidade. Menos criadouros significam menos risco de
              doenças transmitidas por vetores. Menos contaminação significa solo e água mais saudáveis.
            </p>
            <div className="flex items-start gap-2 p-3 bg-white/70 rounded-lg">
              <p className="text-xs text-brand-700/80">
                <strong>Nota:</strong> as informações desta seção têm caráter educativo e preventivo.
                Elas não substituem orientações médicas. Em caso de sintomas ou dúvidas de saúde,
                procure sempre um profissional de saúde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
