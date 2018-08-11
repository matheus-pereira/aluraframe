class ListaNegociacoes {

  constructor() {
    this._negociacoes = [];
    // this._armadilha = armadilha;
  }
  
  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  adiciona(negociacao) {
    this._negociacoes = this._negociacoes.concat(negociacao);
    // this._negociacoes.push(negociacao);
    // this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  esvazia() {
    this._negociacoes = [];
    // this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }
}
