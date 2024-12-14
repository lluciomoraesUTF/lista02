import PrintStrategy from './PrintStrategy.js'

export default class PrintTxtStrategy extends PrintStrategy{

    getCidadesArray(cidades){
        const cidadesArray = [];

        cidades.forEach(estado => {
            const estadoCidades = estado.cidades;
            estadoCidades.forEach(cidade => {
                cidadesArray.push(cidade);
            })
        });

        return cidadesArray;
    }

     print(cidades){

        const cidadesArray = this.getCidadesArray(cidades);

        let result = `Relatório de Nomes de Cidades
        =============================`;

        for (let i = 0; i < cidadesArray.length; i++) {
        result += '* ' + cidadesArray[i]['Nome'] + '\n';
        }

        return result;
    }
}