import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  cambio: any = {}

  resultado;
  resultado1;
  resultado2;
  resultado3;
  txdolar;
  txeuro;
  vreal;

  buscar() {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL")
      .then(function (dados) {
        return dados.json()
      }).then((dadosRetornados) => {
        console.log(dadosRetornados)
        this.cambio = { ...dadosRetornados };
        console.log(this.cambio);
      })
  }

  convrd(formu) {
    this.buscar();
    const vreal = formu.value.vreal;
    const txdolar = this.cambio.USDBRL.ask;
    ''
    this.resultado1 = parseFloat(vreal) / parseFloat(txdolar);
  }

  convre(formu) {
    this.buscar();
    const vreal = formu.value.vreal;
    const txeuro = this.cambio.EURBRL.ask;

    this.resultado2 = parseFloat(vreal) / parseFloat(txeuro);
  }

  convdr(formu) {
    this.buscar();
    const vconv = formu.value.vconv;
    const txdolar = this.cambio.USDBRL.ask;

    this.resultado = parseFloat(vconv) * parseFloat(txdolar);
  }

  conver(formu) {
    this.buscar();
    const vconv = formu.value.vconv;
    const txeuro = this.cambio.EURBRL.ask;

    this.resultado3 = parseFloat(vconv) * parseFloat(txeuro);
  }

}

