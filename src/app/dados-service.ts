import { Injectable } from "@angular/core";
import { Dados } from "./views/dados";

@Injectable({
    providedIn: 'root'
})

export class DadosService{
    
    retrieveAll(): Dados[]{
        return DADOS;
    }
    
}

var DADOS: Dados[] = [
    {
        "id": 1,
        "city": "São Paulo",
        "stateCode": "SP",
        "quantity": 200,
        "confirmed": 12,
        "recovered": 1,
        "deaths": 2,
        "suspected": 0
    },
    {
        "id": 5,
        "city": "Belo Horizonte",
        "stateCode": "MG",
        "quantity": 199,
        "confirmed": 11,
        "recovered": 2,
        "deaths": 2,
        "suspected": 0
    },
    {
        "id": 2,
        "city": "Rio de Janeiro",
        "stateCode": "RJ",
        "quantity": 100,
        "confirmed": 10,
        "recovered": 2,
        "deaths": 1,
        "suspected": 1
    },
    {
        "id": 3,
        "city": "Fortaleza",
        "stateCode": "CE",
        "quantity": 50,
        "confirmed": 9,
        "recovered": 2,
        "deaths": 3,
        "suspected": 4
    },
    {
        "id": 4,
        "city": "Rio Grande do Sul",
        "stateCode": "RS",
        "quantity": 300,
        "confirmed": 22,
        "recovered": 0,
        "deaths": 5,
        "suspected": 3
    }
]
