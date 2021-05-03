import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartType, ChartOptions } from 'chart.js'
import { DadosService } from '../dados-service';
import { Dados } from "./dados";

@Component({
    templateUrl: './grafico.component.html'
})
export class GraficoComponent implements OnInit {
   
    dados: Dados[] = [];

    constructor(private dadosService: DadosService){
    }

    @ViewChild("meuCanvas", {static: true}) element: ElementRef;
    ngOnInit(){

        this.dados = this.dadosService.retrieveAll();

        
        const dataTeste = this.dados.map((dado) => {
            console.log(dado.quantity + "  TESTE DIIH");
            return dado.quantity
            
        })

        const dataLabel = this.dados.map((dado) => {
            console.log(dado.city + "  TESTE DIIH");
            return dado.city
        })

        console.log(dataTeste)

        new Chart(this.element.nativeElement, {
        
            type: 'line',
            data: {
                 
                datasets: [
                    {
                      data: dataTeste,
                      borderColor: "#FF0000",
                      fill: false,
                    }
                  ],
                labels: 
                    dataLabel,             
                },
                options: {
                    legend: {
                        display: null,
                    
                    }
                }
        });
    }
}