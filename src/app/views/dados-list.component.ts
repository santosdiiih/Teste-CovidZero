import { Component, OnInit } from "@angular/core";
import { DadosService } from "../dados-service";
import { Dados } from "./dados";

@Component({
    
    templateUrl: './dados-list.component.html'
})
export class DadosListComponent implements OnInit{
    dados: Dados[] = [];

    constructor(private dadosService: DadosService) {

    }

    ngOnInit(): void{
        this.dados = this.dadosService.retrieveAll();
    }
}