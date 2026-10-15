// Banco de materiais para a busca do Guia de Reciclagem
// Para adicionar um novo material, basta copiar um objeto abaixo e alterar os campos.
export interface MaterialEntry {
  name: string;
  category: 'papel' | 'plastico' | 'vidro' | 'metal';
  categoryLabel: string;
  emoji: string;
  tip: string;
}

export const materials: MaterialEntry[] = [
  { name: 'caixa de papelão', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '📦', tip: 'Desmonte e empilhe para economizar espaço.' },
  { name: 'jornal', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '📰', tip: 'Mantenha seco e amontoe para entrega.' },
  { name: 'revista', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '📖', tip: 'Pode ser doado antes de descartar.' },
  { name: 'papel sulfite', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '📄', tip: 'Aproveite os dois lados antes de descartar.' },
  { name: 'embalagem longa vida', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '🥛', tip: 'Lave, seque e amasse antes de descartar.' },
  { name: 'garrafa pet', category: 'plastico', categoryLabel: 'Plástico', emoji: '🥤', tip: 'Lave, remova rótulos e amasse para economizar espaço.' },
  { name: 'saco plástico', category: 'plastico', categoryLabel: 'Plástico', emoji: '🛍️', tip: 'Limpe e seque antes de descartar.' },
  { name: 'embalagem de cleaning', category: 'plastico', categoryLabel: 'Plástico', emoji: '🧴', tip: 'Enxágue bem para remover restos de produto.' },
  { name: 'canudo', category: 'plastico', categoryLabel: 'Plástico', emoji: '🥢', tip: 'Prefira canudos reutilizáveis ou de papel.' },
  { name: 'brinquedo de plástico', category: 'plastico', categoryLabel: 'Plástico', emoji: '🧸', tip: 'Considere doar se estiver em bom estado.' },
  { name: 'garrafa de vidro', category: 'vidro', categoryLabel: 'Vidro', emoji: '🍾', tip: 'Lave e remova tampas e rótulos.' },
  { name: 'pote de vidro', category: 'vidro', categoryLabel: 'Vidro', emoji: '🫙', tip: 'Lave bem e separe tampas metálicas.' },
  { name: 'copo de vidro', category: 'vidro', categoryLabel: 'Vidro', emoji: '🥃', tip: 'Embale cacos em papel grosso para segurança.' },
  { name: 'frasco de perfume', category: 'vidro', categoryLabel: 'Vidro', emoji: '🧴', tip: 'Esvazie completamente e lave se possível.' },
  { name: 'lata de alumínio', category: 'metal', categoryLabel: 'Metal', emoji: '🥫', tip: 'Lave e amasse para economizar espaço.' },
  { name: 'lata de conservas', category: 'metal', categoryLabel: 'Metal', emoji: '🥫', tip: 'Lave bem para remover restos de comida.' },
  { name: 'tampa de metal', category: 'metal', categoryLabel: 'Metal', emoji: '🥄', tip: 'Separe tampas para evitar mistura com outros materiais.' },
  { name: 'papel alumínio limpo', category: 'metal', categoryLabel: 'Metal', emoji: '✨', tip: 'Apenas papel alumínio limpo é reciclável.' },
  { name: 'clipe de papel', category: 'metal', categoryLabel: 'Metal', emoji: '📎', tip: 'Junte clipes para descartar em quantidade.' },
  { name: 'folha de papel almaço', category: 'papel', categoryLabel: 'Papel e Papelão', emoji: '📝', tip: 'Rascunhe os dois lados antes de descartar.' },
];

// Categorias do guia de reciclagem
export interface RecyclingCategory {
  id: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  description: string;
  examples: string[];
  tips: string[];
}

export const recyclingCategories: RecyclingCategory[] = [
  {
    id: 'papel',
    title: 'Papel e Papelão',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    icon: '📄',
    description: 'Papéis e embalagens de papelão podem ser reciclados diversas vezes, desde que estejam limpos e secos.',
    examples: ['Caixas de papelão', 'Jornais e revistas', 'Papel sulfite', 'Embalagens longa vida (Tetra Pak)'],
    tips: [
      'Mantenha o papel seco — papel molhado ou engordurado não é reciclável',
      'Desmonte caixas de papelão para economizar espaço',
      'Separe papéis com plástico ou metal (como embalagens de salgadinhos) — eles não são recicláveis juntos',
    ],
  },
  {
    id: 'plastico',
    title: 'Plástico',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    icon: '🥤',
    description: 'O plástico é um dos materiais mais presentes no dia a dia. Reciclar plástico economiza petróleo e energia.',
    examples: ['Garrafas PET', 'Sacolas plásticas', 'Embalagens de produtos de limpeza', 'Tubos e canos de PVC'],
    tips: [
      'Lave as embalagens para remover restos de alimentos ou produtos',
      'Remova rótulos e tampas quando possível',
      'Amasse garrafas PET para economizar espaço na coleta',
    ],
  },
  {
    id: 'vidro',
    title: 'Vidro',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    icon: '🍾',
    description: 'O vidro pode ser reciclado infinitas vezes sem perder qualidade. Cacos de vidro devem ser manuseados com cuidado.',
    examples: ['Garrafas de bebidas', 'Potes de conservas', 'Frascos de perfumes', 'Copos e taças'],
    tips: [
      'Lave as embalagens antes de descartar',
      'Remova tampas e rótulos metálicos',
      'Embale cacos em papel grosso para proteger os trabalhadores da coleta',
      'Espelhos e cerâmicas não vão na reciclagem de vidro comum',
    ],
  },
  {
    id: 'metal',
    title: 'Metal',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    icon: '🥫',
    description: 'Latas de alumínio e aço são 100% recicláveis. Reciclar alumínio economiza 95% da energia usada na produção primária.',
    examples: ['Latas de alumínio (refrigerante, cerveja)', 'Latas de conservas', 'Tampas de metal', 'Papel alumínio limpo'],
    tips: [
      'Lave as latas para remover restos de alimentos',
      'Amasse latas de alumínio para economizar espaço',
      'Separe tampas metálicas do restante do material',
    ],
  },
];
