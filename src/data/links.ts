// Links oficiais para o descarte consciente — Indaiatuba/SP e regiões
// Para alterar ou adicionar um link, basta editar este array.

export interface OfficialLink {
  title: string;
  description: string;
  url: string;
}

export const officialLinks: OfficialLink[] = [
  {
    title: 'Prefeitura de Indaiatuba — Coleta Seletiva',
    description: 'Site oficial com informações sobre coleta seletiva, ecopontos e ilhas ecológicas em Indaiatuba.',
    url: 'https://www.indaiatuba.sp.gov.br/urbanismo/coleta-seletiva',
  },
  {
    title: 'Prefeitura de Indaiatuba — Coleta Domiciliar Urbana',
    description: 'Cronograma de coleta domiciliar e informações sobre serviços urbanos.',
    url: 'https://www.indaiatuba.sp.gov.br/urbanismo/coleta-domiciliar-urbana',
  },
  {
    title: 'Green Eletron — Pontos de entrega de eletrônicos e pilhas',
    description: 'Localize o ponto de entrega voluntária mais próximo para eletroeletrônicos, pilhas e baterias.',
    url: 'https://greeneletron.org.br',
  },
  {
    title: 'EcoMed — Descarte de medicamentos em Indaiatuba',
    description: 'Mapa interativo com pontos de coleta de medicamentos vencidos ou sem uso em Indaiatuba/SP.',
    url: 'https://ecomed.eco.br/descarte/indaiatuba-sp',
  },
];

// Fontes de referência para o rodapé
export interface ReferenceLink {
  title: string;
  url: string;
}

export const referenceLinks: ReferenceLink[] = [
  { title: 'Prefeitura Municipal de Indaiatuba', url: 'https://www.indaiatuba.sp.gov.br' },
  { title: 'Green Eletron — Logística Reversa', url: 'https://greeneletron.org.br' },
  { title: 'EcoMed — Descarte de Medicamentos', url: 'https://ecomed.eco.br' },
  { title: 'MMA — Ministério do Meio Ambiente', url: 'https://www.gov.br/mma/pt-br' },
  { title: 'CEMPRE — Compromisso Empresarial para Reciclagem', url: 'https://cempre.org.br' },
];
