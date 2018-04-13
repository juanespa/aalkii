import { ReservasService } from './../../reservas.service';
import { Reservas } from './../../reservas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrreservados',
  templateUrl: './carrreservados.component.html',
  styleUrls: ['./carrreservados.component.css']
})
export class CarrreservadosComponent implements OnInit {
  reserva: Reservas[];
  prueba: any;

  constructor(private servicoRese: ReservasService) {}

  ngOnInit() {
    this.servicoRese.getResevaDisponibles().subscribe(result => {
      this.prueba = result.reservas;
      this.reserva = this.prueba;

      console.log(this.reserva);
    });
  }

  eliminarReserva(id: string) {
    if (
      confirm('Esta seguro que desea eliminar la reserva con id ' + id)
    ) {
      this.servicoRese.geteliminarCarroDisp(id).subscribe(respuesta => {
        respuesta = respuesta.reservas;
        alert('Reserva eliminada');
        this.servicoRese
          .getResevaDisponibles()
          .subscribe(respuest => (this.reserva = respuest.reservas));
      });
    }
  }
}
