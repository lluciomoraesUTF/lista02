import CityFactory from "../src/factories/CityFactory.js";
const caminho = './../data/cidades-2.json'; 

try {
  const cityFactory = new CityFactory();
  const relatorio = cityFactory.reportar(caminho, 'txt');
  
  
  console.log('Relatório de Cidades Agrupadas por Estado (Composite):');
  console.log(relatorio);


} catch (error) {
  console.error('Erro durante o teste de agrupamento Composite:', error.message);
}
