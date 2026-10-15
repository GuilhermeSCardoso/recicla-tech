import { Recycle, Cpu, Users, GraduationCap, Heart, QrCode } from 'lucide-react';

const aboutImage = 'https://images.pexels.com/photos/9037599/pexels-photo-9037599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const principles = [
  {
    icon: GraduationCap,
    title: 'Finalidade educativa',
    description:
      'O ReciclaTech nasceu com o objetivo de educar e conscientizar moradores sobre a importância da separação correta de resíduos, reciclagem, consumo consciente e descarte adequado. Todo o conteúdo é gratuito e acessível a qualquer pessoa.',
  },
  {
    icon: Users,
    title: 'Extensão universitária',
    description:
      'Esta iniciativa faz parte de um projeto de extensão do curso de Análise e Desenvolvimento de Sistemas (ADS). Projetos de extensão conectam a universidade com a comunidade, levando conhecimento acadêmico para fora da sala de aula.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia a favor da informação',
    description:
      'Usamos a tecnologia para facilitar o acesso à informação ambiental. O site funciona em qualquer dispositivo com acesso à internet — celular, tablet ou computador — sem necessidade de cadastro ou download.',
  },
];

export function About() {
  return (
    <section id="sobre" className="section-padding bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Sobre o ReciclaTech</h2>
          <p className="section-subtitle mx-auto text-center">
            Conheça a história, a finalidade e a equipe por trás deste projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Imagem */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Voluntários e crianças participando de ação educativa ambiental"
              className="w-full h-[350px] sm:h-[450px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
          </div>

          {/* Princípios */}
          <div className="space-y-6 order-1 lg:order-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-800 mb-1">{p.title}</h3>
                    <p className="text-sm text-brand-800/70 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ação presencial */}
        <div className="card bg-gradient-to-br from-brand-600 to-brand-700 text-white border-0">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/15 rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-white" aria-hidden="true" />
            </div>
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-2xl font-bold mb-3">Ação Presencial de Conscientização</h3>
              <p className="text-white/90 leading-relaxed">
                Além deste site, o ReciclaTech realiza ações presenciais na comunidade, com
                atividades educativas, distribuição de materiais informativos e demonstrações
                práticas de separação de resíduos. Acreditamos que a tecnologia e o contato humano
                se complementam: o site oferece informação acessível a qualquer hora, enquanto as
                ações presenciais aproximam a universidade da comunidade e criam conexões reais.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/15 px-5 py-3 rounded-xl backdrop-blur-sm">
                <Recycle className="w-6 h-6 text-white" aria-hidden="true" />
                <span className="font-semibold">ReciclaTech</span>
              </div>
              <a
                href="#qrcode"
                className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                <QrCode className="w-4 h-4" aria-hidden="true" />
                Gerar QR Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
