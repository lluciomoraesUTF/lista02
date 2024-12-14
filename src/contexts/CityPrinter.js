export default class CityPrinter{
    constructor(strategy) {
        this.strategy = strategy;
    }

    print(cidades) {
        return this.strategy.print(cidades);
    }
}