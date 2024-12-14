class Estados {
  constructor(id) {
    this.id = id;
    this.cidades = [];
  }

  adicionar(cidade) {
    this.cidades.push(cidade);
  }

  getCidades() {
    return this.cidades;
  }

  getId() {
    return this.id;
  }
}

export default Estados;
