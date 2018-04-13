import { CarrDisp } from './../../carr-disp';
import { Component, OnInit } from '@angular/core';
import { CardisponibleService } from './../../cardisponible.service';

@Component({
  selector: 'app-carrosdisp',
  templateUrl: './carrosdisp.component.html',
  styleUrls: ['./carrosdisp.component.css']
})
export class CarrosdispComponent implements OnInit {
  nombre: CarrDisp;
  prueba: any;

  constructor(public cardsService: CardisponibleService) {}

  ngOnInit() {
    this.cardsService.getCarDisponibles().subscribe(result => {
      this.prueba = result.carrosdisponibles;
      this.nombre = this.prueba;

      console.log(this.nombre);
    });
  }

  eliminarCarrDisp(placa: string) {
    if (confirm('Esta seguro que desea elimanar el el carro con placa  ' + placa)) {
      this.cardsService.geteliminarCarroDisp(placa).subscribe(respuesta => {
        respuesta = respuesta.carrosdisponibles;
        alert('Carro disponible, Eliminado');
        this.cardsService
          .getCarDisponibles()
          .subscribe(respuest => (this.nombre = respuest.carrosdisponibles));
      });
    }
  }
}
