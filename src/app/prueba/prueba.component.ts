import { CarrDisp } from './../carr-disp';
import { CardisponibleService } from './../cardisponible.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  nombre: CarrDisp[];
  prueba: any;

  constructor(private cardsService: CardisponibleService) {
  }

  ngOnInit() {
    this.cardsService.getCarDisponibles()
    .subscribe( result => {
      this.prueba = result.carrosdisponibles;
      this.nombre = this.prueba;

      console.log(this.nombre);
    });
  }

}
