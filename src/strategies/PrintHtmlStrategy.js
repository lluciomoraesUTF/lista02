import PrintStrategy from './PrintStrategy.js'

export default class PrintHtmlStrategy extends PrintStrategy{

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

        let result = `
        <!DOCTYPE HTML>
        <html>
            <head>
            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <title>Relatório de Nomes de Cidades</title>
            </head>
            <body>
            <h1>Relatório de Nomes de Cidades</h1>
            <ul>
        `;

            for (let i = 0; i < cidadesArray.length; i++) {
            result += '     <li>' + cidadesArray[i]['Nome'] + '</li>\n';
            }

            result += `
            </ul>
            </body>
        </html>`;

        return result;
    }
}