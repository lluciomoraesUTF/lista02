import * as fs from 'node:fs';
import Cidades from '../models/Cidades.js';
import Estados from '../models/Estados.js';
import CityPrinter from '../contexts/CityPrinter.js';
import PrintHtmlStrategy from '../strategies/PrintHtmlStrategy.js';
import PrintTxtStrategy from '../strategies/PrintTxtStrategy.js';

export default class CityFactory {

  static ler (caminho) {
    return fs.readFileSync(caminho);
  }

  static parse (cidades) {
    return JSON.parse(cidades);
  }

  static reportar(caminho, formato){
    const cidades = this.ler(caminho);
    const jsonData = this.parse(cidades);
    this.criarHierarquia(jsonData);
    return this.criarRelatorio(jsonData, formato);
  }

  static criarHierarquia(jsonData) {
    const estados = {};

    jsonData.forEach(({ ID, Nome, Estado }) => {
      if (!estados[Estado]) {
        estados[Estado] = new Estados(Estado);  
      }

      const cidade = new Cidades(ID, Nome, Estado);
      estados[Estado].adicionar(cidade);
    });

    return Object.values(estados);
  }

  static criarRelatorio(jsonData, formato) {
    const estados = this.criarHierarquia(jsonData);

    let estrategia;
    if (formato === 'html') {
      estrategia = new PrintHtmlStrategy();
    } else if (formato === 'txt') {
      estrategia = new PrintTxtStrategy();
    } else {
      throw new Error('Formato de relatório inválido');
    }

    const relatorio = new CityPrinter(estrategia);
    return relatorio.print(estados);
  }
}

