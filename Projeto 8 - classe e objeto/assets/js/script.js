class ContaBancaria{
    constructor(agencia,numero,tipo,saldo = 0){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if(valor >= this._saldo){
            return "Operação Negada";
        }else{
        this._saldo = this._saldo - valor;
    }
    return this._saldo;
}
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,saldo,cartaoCredito){
        super(agencia,numero,saldo);
        this.tipo = "Corrente";
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}
class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero,saldo,vPoupanca){
        super(agencia,numero,saldo);
        this.tipo = "Poupança";
        this._vPoupanca = vPoupanca;
    }
    get poupanca(){
        return this._vPoupanca;
    }
    set poupanca(valor){
        this._vPoupanca = valor;
    }

}
class ContaEstudo extends ContaBancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero,saldo);
        this.tipo = "Universitaria";
    }
    sacar(valor){
        if(valor>500){
            return "Operação excede o valor permitido.";
        }else if(valor >= this._saldo){
            return "Operação Negada";
        }else{
        this._saldo = this._saldo - valor;
    }
    return this._saldo;
    }
}