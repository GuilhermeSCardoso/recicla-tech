import { Recycle, Leaf, Smartphone } from 'lucide-react';

// COLOQUE AQUI O ENDEREÇO DO SEU SITE PUBLICADO (ex: https://meu-site.bolt.host)
// Se deixar vazio, será usado o endereço atual da página.
const SITE_URL = '';

export function QRCodePage() {
  const url = SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&bgcolor=ffffff&color=225922&margin=10&data=${encodeURIComponent(url)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-beige-100 flex items-center justify-center p-4 print:bg-white">
      {/* Cartão imprimível */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center border-2 border-brand-100 print:shadow-none print:border-0">
        {/* Logotipo */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Recycle className="w-8 h-8 text-brand-600" aria-hidden="true" />
          <span className="text-2xl font-bold font-heading text-brand-700">ReciclaTech</span>
        </div>
        <p className="text-sm text-brand-600/70 mb-1">Tecnologia a favor da reciclagem</p>
        <div className="flex items-center justify-center gap-1 text-xs text-brand-500 mb-6">
          <Leaf className="w-3 h-3" aria-hidden="true" />
          <span>Projeto de Extensão Universitária — ADS</span>
        </div>

        {/* QR Code */}
        <div className="inline-block p-4 bg-white rounded-2xl border-2 border-brand-100 mb-6">
          <img
            src={qrImageUrl}
            alt="QR Code para acessar o site ReciclaTech"
            width={280}
            height={280}
            className="mx-auto"
          />
        </div>

        {/* Instrução */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Smartphone className="w-5 h-5 text-brand-600" aria-hidden="true" />
          <p className="text-base font-semibold text-brand-800">Aponte a câmera do celular</p>
        </div>
        <p className="text-sm text-brand-700/70 mb-4">
          Escaneie o QR Code para acessar o site e aprender sobre reciclagem,
          descarte consciente, economia sustentável e saúde ambiental.
        </p>

        {/* Slogan */}
        <div className="border-t border-brand-100 pt-4">
          <p className="text-lg font-bold font-heading text-brand-700">
            Pequenas atitudes. Grandes transformações.
          </p>
        </div>

        {/* URL visível */}
        {url && (
          <p className="text-xs text-brand-500 mt-4 break-all">{url}</p>
        )}
      </div>

      {/* Botão de imprimir (some na impressão) */}
      <div className="fixed bottom-6 right-6 print:hidden">
        <button
          onClick={() => window.print()}
          className="btn-primary shadow-lg"
        >
          Imprimir / Salvar PDF
        </button>
      </div>
    </div>
  );
}
