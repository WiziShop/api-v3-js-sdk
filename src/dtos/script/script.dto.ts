export interface ScriptDto {
  id: number;
  name: string;
  content: string;
  page: string;
  position: string;
  device: string;
}

export const ScriptPage = {
  partout: 'partout',
  commande: 'commande',
  accueil: 'accueil',
  info: 'info',
  produit: 'produit',
  blog: 'blog'
};

export const ScriptPosition = {
  head: 'head',
  debut_body: 'debut_body',
  fin_body: 'fin_body'
};

export const ScriptDevice = {
  all: 'all',
  desktop: 'desktop',
  mobile: 'mobile'
};
