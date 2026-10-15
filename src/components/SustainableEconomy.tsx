import { Recycle, ShoppingCart, Users, Leaf, TrendingDown } from 'lucide-react';

const cards = [
  {
    icon: Recycle,
    title: 'Reaproveitamento de recursos',
    description:
      'Quando separamos os materiais recicláveis, eles voltam para a indústria como matéria-prima. Isso significa menos extração de recursos naturais — menos árvores cortadas, menos mineração, menos petróleo refinado.',
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
  },
  {
    icon: TrendingDown,
    title: 'Redução do desperdício',
    description:
      'Separar corretamente reduz a quantidade de resíduos que vão para aterros sanitários. Isso prolonga a vida útil dos aterros e diminui os custos da gestão de resíduos para o município.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ShoppingCart,
    title: 'Consumo consciente',
    description:
      'Consumir de forma consciente significa refletir antes de comprar: você realmente precisa deste produto? Dar preferência a itens duráveis, com menos embalagens e que possam ser reutilizados ou reciclados reduz a quantidade de resíduos gerados.',
    color: 'text-accent-500',
    bgColor: 'bg-beige-100',
  },
  {
    icon: Users,
    title: 'Cooperativas de reciclagem',
    description:
      'As cooperativas de reciclagem fazem a triagem e separação dos materiais recicláveis que chegam da coleta seletiva. Eles vendem esses materiais para indústrias, gerando renda e empregos para dezenas de famílias. Ao separar seu lixo corretamente, você apoia diretamente esse trabalho.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export function SustainableEconomy() {
  return (
    <section id="economia" className="section-padding bg-beige-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Economia Sustentável</h2>
          <p className="section-subtitle mx-auto text-center">
            A separação de materiais não apenas protege o meio ambiente — ela gera valor
            econômico, renda e oportunidades para a comunidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className={`card card-hover ${card.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon className={`w-7 h-7 ${card.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-800 mb-2">{card.title}</h3>
                    <p className="text-sm text-brand-800/70 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exemplo cotidiano */}
        <div className="card max-w-3xl mx-auto bg-gradient-to-br from-brand-50 to-beige-50 border-brand-200">
          <div className="flex items-start gap-3 mb-3">
            <Leaf className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-800">Exemplo do dia a dia</h3>
          </div>
          <p className="text-brand-800/80 leading-relaxed">
            Imagine que você separa uma garrafa PET, uma lata de alumínio e uma caixa de papelão
            para a coleta seletiva. A garrafa pode virar novas embalagens ou tecidos. A lata de
            alumínio volta para as prateleiras em apenas 60 dias, economizando 95% de energia.
            O papelão vira nova caixa. Nada disso vai para o aterro. A cooperativa local ganha
            renda com a venda desses materiais. <strong>Tudo isso só porque você separou corretamente.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
