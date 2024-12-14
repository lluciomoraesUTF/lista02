import CityFactory from './src/factories/CityFactory.js'; 
const [cmd, filename, format] = process.argv;
const caminho = './data/cidades-2.json';



const cityFactory = new CityFactory();
const relatorioHtml = cityFactory.reportar(caminho, format);
console.log(relatorioHtml);