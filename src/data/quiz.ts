// Banco de perguntas para o quiz educativo
// As perguntas são embaralhadas e 8 são selecionadas a cada nova tentativa.
// Para adicionar uma nova pergunta, copie um objeto abaixo e altere os campos.
// O campo "correct" é o índice (começando em 0) da resposta correta em "options".

export interface QuizQuestion {
  id: number;
  category: 'guia' | 'descarte' | 'economia' | 'saude';
  categoryLabel: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizPool: QuizQuestion[] = [
  // GUÍA DE RECICLAGEM
  {
    id: 1,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'Qual destes materiais pertence à categoria de Papel e Papelão?',
    options: ['Garrafa PET', 'Caixa de papelão', 'Lata de alumínio', 'Pote de vidro'],
    correct: 1,
    explanation: 'Caixas de papelão são feitas de papelão, que pertence à categoria de Papel e Papelão. Lembre-se de desmontá-las para economizar espaço.',
  },
  {
    id: 2,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'Antes de descartar uma garrafa PET na reciclagem, o que é recomendado fazer?',
    options: ['Apenas jogar no lixo comum', 'Lavar, remover rótulos e amassar', 'Queimá-la para reduzir o tamanho', 'Pintá-la para identificação'],
    correct: 1,
    explanation: 'Lavar a garrafa PET, remover rótulos e amassá-la ajuda na triagem e economiza espaço na coleta seletiva.',
  },
  {
    id: 3,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'O vidro pode ser reciclado quantas vezes sem perder qualidade?',
    options: ['Apenas uma vez', 'No máximo três vezes', 'Infinitas vezes', 'Não é reciclável'],
    correct: 2,
    explanation: 'O vidro pode ser reciclado infinitas vezes sem perder qualidade. Por isso, descartar corretamente faz muita diferença.',
  },
  {
    id: 4,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'Reciclar uma lata de alumínio economiza quanto da energia usada na produção primária?',
    options: ['95% da energia', '10% da energia', '50% da energia', 'Não economiza energia'],
    correct: 0,
    explanation: 'Reciclar alumínio economiza cerca de 95% da energia que seria gasta na produção a partir do minério bruto.',
  },
  {
    id: 5,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'Papel molhado ou engordurado deve ir para a reciclagem?',
    options: ['Sim, papel é sempre reciclável', 'Sim, mas deve ser seco antes', 'Não, apenas papel limpo e seco é reciclável', 'Sim, se for papelão'],
    correct: 2,
    explanation: 'Papel molhado ou engordurado não é reciclável. Apenas papéis limpos e secos podem ser reciclados.',
  },
  {
    id: 6,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'O que fazer com cacos de vidro ao descartar para reciclagem?',
    options: ['Jogar soltos na sacola', 'Embalar em papel grosso para proteger os trabalhadores', 'Misturar com plástico', 'Jogar no lixo orgânico'],
    correct: 1,
    explanation: 'Cacos de vidro devem ser embalados em papel grosso para proteger os trabalhadores da coleta de possíveis cortes.',
  },
  {
    id: 7,
    category: 'guia',
    categoryLabel: 'Guia de Reciclagem',
    question: 'Qual destes itens NÃO deve ser colocado na reciclagem de vidro comum?',
    options: ['Garrafa de bebida', 'Pote de conserva', 'Espelho', 'Frasco de perfume'],
    correct: 2,
    explanation: 'Espelhos e cerâmicas não vão na reciclagem de vidro comum, pois têm composição diferente das embalagens de vidro.',
  },

  // DESCARTE CONSCIENTE
  {
    id: 8,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'Pilhas e baterias usadas devem ser descartadas no lixo comum?',
    options: ['Sim, não há problema', 'Sim, se forem comuns', 'Não, elas contêm metais pesados e precisam de pontos de coleta específicos', 'Sim, se estiverem descarregadas'],
    correct: 2,
    explanation: 'Pilhas e baterias contêm metais pesados e substâncias tóxicas. Devem ser levadas a pontos de coleta específicos, nunca jogadas no lixo comum.',
  },
  {
    id: 9,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'O que fazer com medicamentos vencidos?',
    options: ['Jogar no lixo comum', 'Descartar na pia ou vaso sanitário', 'Levar a pontos de coleta em farmácias ou postos de saúde', 'Guardar em casa indefinidamente'],
    correct: 2,
    explanation: 'Medicamentos vencidos devem ser levados a pontos de coleta em farmácias ou postos de saúde. Nunca descarte no lixo comum ou na rede de esgoto.',
  },
  {
    id: 10,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'O óleo de cozinha usado pode ser descartado na pia?',
    options: ['Sim, se for pouco', 'Sim, com água quente', 'Não, ele pode entupir encanamentos e contaminar rios', 'Sim, se for óleo vegetal'],
    correct: 2,
    explanation: 'O óleo de cozinha nunca deve ser jogado na pia. Ele entope encanamentos e contamina rios. Armazene em garrafa e leve a pontos de coleta para produção de biodiesel.',
  },
  {
    id: 11,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'Equipamentos eletrônicos (lixo eletrônico) devem ser descartados como?',
    options: ['No lixo comum junto com orgânicos', 'Em pontos de coleta específicos para eletroeletrônicos', 'Queimados em áreas abertas', 'Enterrados no quintal'],
    correct: 1,
    explanation: 'Equipamentos eletrônicos contêm materiais valiosos e substâncias tóxicas. Devem ser levados a pontos de coleta específicos, como os da Green Eletron ou Ecopontos.',
  },
  {
    id: 12,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'Lâmpadas fluorescentes precisam de descarte especial porque:',
    options: ['São feitas de vidro comum', 'Contêm mercúrio, uma substância tóxica', 'São muito caras', 'Não podem ser recicladas'],
    correct: 1,
    explanation: 'Lâmpadas fluorescentes contêm mercúrio, uma substância tóxica. Por isso, precisam de descarte em pontos específicos, nunca no lixo comum.',
  },
  {
    id: 13,
    category: 'descarte',
    categoryLabel: 'Descarte Consciente',
    question: 'Em Indaiatuba/SP, onde é possível descartar eletroeletrônicos, lâmpadas e pilhas?',
    options: ['Apenas em supermercados', 'Nos Ecopontos e Ilhas Ecológicas da cidade', 'No lixo orgânico domiciliar', 'Em qualquer calçada'],
    correct: 1,
    explanation: 'Em Indaiatuba, os Ecopontos e Ilhas Ecológicas recebem eletroeletrônicos, lâmpadas, pilhas, baterias e óleo de cozinha. Consulte o site da prefeitura para localização.',
  },

  // ECONOMIA SUSTENTÁVEL
  {
    id: 14,
    category: 'economia',
    categoryLabel: 'Economia Sustentável',
    question: 'Como a separação de materiais recicláveis favorece a economia?',
    options: ['Aumenta o custo da coleta', 'Permite o reaproveitamento de recursos e gera renda para cooperativas', 'Não tem impacto econômico', 'Reduz empregos na cidade'],
    correct: 1,
    explanation: 'A separação correta permite o reaproveitamento de recursos, gera renda para cooperativas de reciclagem e reduz custos com aterros sanitários.',
  },
  {
    id: 15,
    category: 'economia',
    categoryLabel: 'Economia Sustentável',
    question: 'O que é consumo consciente?',
    options: ['Comprar sempre o mais barato', 'Comprar apenas produtos importados', 'Refletir sobre a real necessidade antes de comprar, evitando desperdícios', 'Comprar a maior quantidade possível'],
    correct: 2,
    explanation: 'Consumo consciente significa refletir se você realmente precisa de um produto antes de comprá-lo, escolhendo opções duráveis e que gerem menos resíduos.',
  },
  {
    id: 16,
    category: 'economia',
    categoryLabel: 'Economia Sustentável',
    question: 'Qual é o papel das cooperativas de reciclagem?',
    options: ['Apenas recolher lixo', 'Triagem, separação e venda de materiais recicláveis, gerando renda e empregos', 'Fabricar novos produtos', 'Cobrar taxas dos moradores'],
    correct: 1,
    explanation: 'As cooperativas de reciclagem fazem a triagem e separação dos materiais recicláveis, vendendo-os para indústrias e gerando renda e empregos para os cooperados.',
  },
  {
    id: 17,
    category: 'economia',
    categoryLabel: 'Economia Sustentável',
    question: 'O que significa "reaproveitamento de recursos" no contexto da reciclagem?',
    options: ['Jogar tudo no mesmo lixo', 'Transformar materiais usados em novos produtos, economizando matérias-primas naturais', 'Comprar mais produtos', 'Queimar resíduos para gerar energia'],
    correct: 1,
    explanation: 'Reaproveitamento de recursos significa transformar materiais usados em novos produtos, economizando água, energia e matérias-primas naturais extraídas da natureza.',
  },
  {
    id: 18,
    category: 'economia',
    categoryLabel: 'Economia Sustentável',
    question: 'Por que evitar o desperdício de alimentos também é sustentabilidade?',
    options: ['Não é relacionado à sustentabilidade', 'Porque reduz a quantidade de resíduos orgânicos e economiza recursos usados na produção', 'Porque é lei', 'Porque alimentos são caros'],
    correct: 1,
    explanation: 'Evitar o desperdício de alimentos reduz a quantidade de resíduos orgânicos e economiza todos os recursos (água, energia, terra) usados na sua produção.',
  },

  // MEIO AMBIENTE E SAÚDE
  {
    id: 19,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'O acúmulo inadequado de resíduos pode causar qual problema de saúde?',
    options: ['Nenhum problema', 'Criadouros de mosquitos transmissores de doenças como dengue', 'Aumento do comércio local', 'Melhoria da qualidade do ar'],
    correct: 1,
    explanation: 'O acúmulo de resíduos pode criar criadouros de mosquitos transmissores de doenças como dengue, zika e chikungunya, além de atrair ratos e insetos.',
  },
  {
    id: 20,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'Materiais cortantes (como cacos de vidro e latas) descartados incorretamente representam que risco?',
    options: ['Nenhum risco', 'Risco de cortes em trabalhadores da coleta e em crianças', 'Apenas sujar o ambiente', 'Aumentar o valor do material'],
    correct: 1,
    explanation: 'Materiais cortantes descartados incorretamente podem causar cortes em trabalhadores da coleta e em crianças. Embale cacos em papel grosso para proteção.',
  },
  {
    id: 21,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'A limpeza urbana adequada está relacionada a:',
    options: ['Apenas estética da cidade', 'Prevenção de doenças e melhoria da qualidade de vida da população', 'Aumentar o turismo', 'Aumentar impostos'],
    correct: 1,
    explanation: 'A limpeza urbana adequada previne doenças, reduz criadouros de vetores e melhora a qualidade de vida da população, indo muito além da estética da cidade.',
  },
  {
    id: 22,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'O descarte incorreto de pilhas e baterias pode contaminar:',
    options: ['Apenas o ar', 'O solo e a água com metais pesados, afetando plantas, animais e pessoas', 'Apenas o lixo orgânico', 'Nada, pois são pequenas'],
    correct: 1,
    explanation: 'Pilhas e baterias descartadas incorretamente contaminam o solo e a água com metais pesados, afetando plantas, animais e pessoas ao longo da cadeia alimentar.',
  },
  {
    id: 23,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'Água parada em recipientes abandonados (como pneus e garrafas) pode causar:',
    options: ['Apenas mau cheiro', 'Proliferação do mosquito da dengue', 'Aumento da temperatura', 'Nenhum problema'],
    correct: 1,
    explanation: 'Água parada em recipientes abandonados, como pneus e garrafas, é um dos principais criadouros do mosquito Aedes aegypti, transmissor da dengue.',
  },
  {
    id: 24,
    category: 'saude',
    categoryLabel: 'Meio Ambiente e Saúde',
    question: 'Por que não devemos prometer que a reciclagem "cura" doenças?',
    options: ['Porque reciclagem não tem benefícios', 'Porque a reciclagem previne problemas ambientais, mas não é tratamento médico', 'Porque é ilegal reciclar', 'Porque não é verdade que ajuda'],
    correct: 1,
    explanation: 'A reciclagem e o descarte correto previnem problemas ambientais e sanitários, mas não são tratamentos médicos. A prevenção melhora a qualidade de vida, mas não substitui cuidados de saúde.',
  },
];

// Embaralha um array (algoritmo de Fisher-Yates)
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Seleciona 8 perguntas aleatórias do banco a cada nova tentativa
export function generateQuiz(): QuizQuestion[] {
  return shuffle(quizPool).slice(0, 8);
}
