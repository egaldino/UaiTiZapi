export default class Usuario {
    constructor(nome, email, senha){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
    }

    get nome (){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get email (){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get senha (){
        return this._senha;
    }

    set senha(senha){
        this._senha = senha;
    }
}