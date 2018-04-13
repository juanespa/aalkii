import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../../vehiculos';
import { VehiculosService } from '../../vehiculos.service';


@Component({
  selector: 'app-vehi-listar',
  templateUrl: './vehi-listar.component.html',
  styleUrls: ['./vehi-listar.component.css']
})
export class VehiListarComponent implements OnInit {
  vehi: Vehiculos[];
  prueba: any;

  constructor(private serviceVehiculos: VehiculosService) {}

  ngOnInit() {
    this.serviceVehiculos.getVehiculos().subscribe(result => {
      this.prueba = result.vehiculos;
      this.vehi = this.prueba;
      console.log(this.vehi);
    });
  }

   eliminarVehiculo(placa: string) {
    if (confirm('Esta seguro que desea elimanar el vehiculo con placa  ' + placa)) {
      this.serviceVehiculos.geteliminarVehiculo(placa).subscribe(respuesta => {
        respuesta = respuesta.vehiculos;
        alert('Vehiculo Eliminado');
        this.serviceVehiculos
          .getVehiculos().subscribe(respuest => (this.vehi = respuest.vehiculos));
      });
    }
  }
}
