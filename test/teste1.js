import CityFactory from "../src/factories/CityFactory.js";
const caminho = './../data/cidades-2.json'; 
try {
  const cityFactory = new CityFactory();
  const relatorio = cityFactory.reportar(caminho, 'txt');
  console.log('Relatório de Cidades Gerado:');
  console.log(relatorio);

} catch (error) {
  console.error('Erro durante o teste de impressão de cidades:', error.message);
}
