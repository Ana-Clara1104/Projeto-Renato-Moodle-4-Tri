export const STATUS = [
  { value: 'favorito', label: 'Favorito', icon: 'heart', cor: '#E91E63' },
  { value: 'gostei', label: 'Gostei', icon: 'thumb-up', cor: '#2E9E6B' },
  { value: 'pretendo_ver', label: 'Pretendo ver', icon: 'clock-outline', cor: '#2A8BC9' },
  { value: 'nao_gostei', label: 'Não gostei', icon: 'thumb-down', cor: '#7A6A92' },
];

export const buscarStatus = (valor) => STATUS.find((s) => s.value === valor);
