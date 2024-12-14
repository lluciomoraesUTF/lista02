import PrintStrategy from './PrintStrategy.js'

export default class PrintTxtStrategy extends PrintStrategy{
     print(cidades){
        let result = `Relatório de Nomes de Cidades
        =============================`;

        for (let i = 0; i < cidades.length; i++) {
        result += '* ' + cidades[i]['Nome'] + '\n';
        }

        return result;
    }
}