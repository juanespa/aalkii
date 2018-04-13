import { Router, ActivatedRoute } from '@angular/router';
import { ReservasService } from './../../reservas.service';
import { Reservas } from './../../reservas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modificarreserva',
  templateUrl: './modificarreserva.component.html',
  styleUrls: ['./modificarreserva.component.css']
})
export class ModificarreservaComponent implements OnInit {
id_reserva: number;
id_usuario: number;
fecha_reserva: string;
fecha_inicio: string;
fecha_fin: string;
placa: string;
metodo_pago: number;
poliza: number;
calificacion_servicio: number;

  constructor(private serviceReserva: ReservasService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id_reserva = +this.route.snapshot.paramMap.get('id_reserva');
    this.id_usuario = +this.route.snapshot.paramMap.get('id_usuario');
    this.fecha_reserva = this.route.snapshot.paramMap.get('fecha_reserva');
    this.fecha_inicio = this.route.snapshot.paramMap.get('fecha_inicio');
    this.fecha_fin = this.route.snapshot.paramMap.get('fecha_fin');
    this.placa = this.route.snapshot.paramMap.get('placa');
    this.metodo_pago = +this.route.snapshot.paramMap.get('metodo_pago');
    this.poliza = +this.route.snapshot.paramMap.get('poliza');
    this.calificacion_servicio = +this.route.snapshot.paramMap.get('calificacion_servicio');
  }

  modificarReserva() {
    // tslint:disable-next-line:prefer-const
    let reserva: Reservas = new Reservas(this.id_reserva, this.id_usuario, this.fecha_reserva,
    this.fecha_inicio, this.fecha_fin, this.placa, this.metodo_pago, this.poliza, this.calificacion_servicio);
    this.serviceReserva.modificarReserva(reserva)
    .subscribe(resul => {
      alert(resul.message);
      this.router.navigate(['/carrosreservas']);
    });
  }

}
