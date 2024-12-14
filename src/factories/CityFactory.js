import * as fs from 'node:fs';
import Cidade from '../models/Cidade.js';
import Estado from '../models/Estado.js';
import CityPrinter from '../contexts/CityPrinter.js';
import PrintHtmlStrategy from '../strategies/PrintHtmlStrategy.js';
import PrintTxtStrategy from '../strategies/PrintTxtStrategy.js';

export default class CityFactory {

  ler (caminho) {
    return fs.readFileSync(caminho);
  }

  parse (cidades) {
    return JSON.parse(cidades);
  }

  reportar(caminho, formato){
    const cidades = this.ler(caminho);
    const jsonData = this.parse(cidades);
    return this.criarRelatorio(jsonData, formato);
  }

  criarHierarquia(jsonData) {
    const estados = {};

    jsonData.forEach((cidade) => {
      if (!estados[cidade.Estado]) {
        estados[cidade.Estado] = new Estado(cidade.Estado);  
      }

      const cidadeObject = new Cidade(cidade.ID, cidade.Nome, cidade.Estado);
      estados[cidade.Estado].adicionar(cidadeObject);
    });

    return Object.values(estados);
  }

  criarRelatorio(jsonData, formato) {
    let estrategia;
    if (formato === 'html') {
      estrategia = new PrintHtmlStrategy();
    } else if (formato === 'txt') {
      estrategia = new PrintTxtStrategy();
    } else {
      throw new Error('Formato de relatório inválido');
    }
    const relatorio = new CityPrinter(estrategia);

    const estados = this.criarHierarquia(jsonData);
    
    return relatorio.print(estados);
  }
}

