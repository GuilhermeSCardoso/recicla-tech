import { Recycle, BookOpen, Trash2, ShoppingBag, HeartPulse, HelpCircle, ExternalLink } from 'lucide-react';
import { referenceLinks } from '@/data/links';

const footerLinks = [
  { href: '#guia', label: 'Guia de Reciclagem', icon: BookOpen },
  { href: '#descarte', label: 'Descarte Consciente', icon: Trash2 },
  { href: '#economia', label: 'Economia Sustentável', icon: ShoppingBag },
  { href: '#saude', label: 'Meio Ambiente e Saúde', icon: HeartPulse },
  { href: '#quiz', label: 'Quiz Educativo', icon: HelpCircle },
];

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Sobre o projeto */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-7 h-7 text-brand-300" aria-hidden="true" />
              <span className="text-xl font-bold font-heading">ReciclaTech</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Tecnologia a favor da reciclagem. Um projeto de extensão universitária do curso
              de Análise e Desenvolvimento de Sistemas (ADS) que conscientiza comunidades sobre
              a separação de resíduos, reciclagem e descarte consciente.
            </p>
            <p className="text-brand-300 text-sm font-medium">
              Pequenas atitudes. Grandes transformações.
            </p>
          </div>

          {/* Links das seções */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Seções</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-white/80 hover:text-brand-300 transition-colors text-sm"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Referências */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Fontes e Referências</h3>
            <ul className="space-y-2">
              {referenceLinks.map((ref) => (
                <li key={ref.url}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-white/80 hover:text-brand-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{ref.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Aviso */}
        <div className="border-t border-white/15 pt-6">
          <p className="text-white/60 text-xs leading-relaxed text-center mb-4">
            O conteúdo deste site tem caráter educativo e informativo. As orientações sobre coleta
            seletiva e descarte de resíduos podem variar conforme as regras locais do seu município.
            Consulte sempre as fontes oficiais.
          </p>
          <p className="text-white/50 text-xs text-center">
            ReciclaTech — Projeto de Extensão Universitária · Análise e Desenvolvimento de Sistemas (ADS)
          </p>
        </div>
      </div>
    </footer>
  );
}
