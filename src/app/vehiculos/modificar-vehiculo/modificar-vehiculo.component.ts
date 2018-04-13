import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../vehiculos.service';
import { Vehiculos } from '../../vehiculos';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar-vehiculo',
  templateUrl: './modificar-vehiculo.component.html',
  styleUrls: ['./modificar-vehiculo.component.css']
})
export class ModificarVehiculoComponent implements OnInit {
    placa: string;
    id_usuario: number;
    id_marca: number;
    id_ciudad: number;
    modelo: number;
    version: string;
    puertas: string;
    cilindraje: string;
    transmision: string;
    aa: string;
    tipo_combustible: string;
    estado: number;
  constructor(private servicioVehi: VehiculosService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.placa = this.route.snapshot.paramMap.get('placa');
    this.id_usuario = +this.route.snapshot.paramMap.get('id_usuario');
    this.id_marca = +this.route.snapshot.paramMap.get('id_marca');
    this.id_ciudad = +this.route.snapshot.paramMap.get('id_ciudad');
    this.modelo = +this.route.snapshot.paramMap.get('modelo');
    this.version = this.route.snapshot.paramMap.get('version');
    this.puertas = this.route.snapshot.paramMap.get('puertas');
    this.cilindraje = this.route.snapshot.paramMap.get('cilindraje');
    this.transmision = this.route.snapshot.paramMap.get('transmision');
    this.aa = this.route.snapshot.paramMap.get('aa');
    this.tipo_combustible = this.route.snapshot.paramMap.get('tipo_combustible');
    this.estado = +this.route.snapshot.paramMap.get('estado');
  }

  modificarVehiculo() {
    // tslint:disable-next-line:prefer-const
    let vehi: Vehiculos = new Vehiculos(this.placa, this.id_usuario, this.id_marca, this.id_ciudad,
    this.modelo, this.version, this.puertas, this.cilindraje, this.transmision, this.aa,
  this.tipo_combustible, this.estado);
    this.servicioVehi.modificarVehiculo(vehi)
    .subscribe(resul => {
      alert(resul.message);
      this.router.navigate(["/vehiculoslistar"]);
    });
  }

}
