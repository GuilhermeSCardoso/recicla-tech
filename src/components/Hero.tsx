import { Recycle, Leaf, Trash2, Droplets, BookOpen, HelpCircle } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/17072315/pexels-photo-17072315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-beige-50 via-brand-50 to-beige-100"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-beige-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Texto */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Leaf className="w-4 h-4" aria-hidden="true" />
            <span>Projeto de Extensão Universitária</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-brand-800 leading-tight mb-6">
            Pequenas atitudes.
            <br />
            <span className="text-brand-600">Grandes transformações</span>
          </h1>

          <p className="text-lg text-brand-700/80 mb-8 max-w-xl leading-relaxed">
            Reciclar corretamente ajuda a economizar recursos naturais, reduz o desperdício
            e contribui para um ambiente mais saudável para todos. Descubra como fazer a sua parte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#guia" className="btn-primary">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              Aprenda a reciclar
            </a>
            <a href="#quiz" className="btn-secondary">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
              Faça o quiz
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Recycle className="w-8 h-8 text-brand-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-brand-800">Recicle certo</p>
                <p className="text-xs text-brand-600/70">4 categorias principais</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trash2 className="w-8 h-8 text-accent-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-brand-800">Descarte seguro</p>
                <p className="text-xs text-brand-600/70">Resíduos especiais</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Droplets className="w-8 h-8 text-blue-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-brand-800">Economia e saúde</p>
                <p className="text-xs text-brand-600/70">Conscientização comunitária</p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Lixeiras coloridas para separação de recicláveis: metal, plástico, vidro e papel"
              className="w-full h-[400px] sm:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce-slow">
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-brand-600" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-brand-800 text-sm">Tecnologia a favor da reciclagem</p>
              <p className="text-xs text-brand-600/70">ADS — Extensão Universitária</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
