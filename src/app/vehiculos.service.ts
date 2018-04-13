import { HttpClient } from '@angular/common/http';
import { Vehiculos } from './vehiculos';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class VehiculosService {
  constructor(private http: HttpClient) {}

  // listar
  getVehiculos(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/vehiculosrest.php/vehiculos';
    return this.http.get(url);
  }

  // modificar
  modificarVehiculo(vehiculo: Vehiculos): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/vehiculosrest.php/vehiculo/' + vehiculo.placa;
    return this.http.put(url, vehiculo);
  }

  // eliminar
  geteliminarVehiculo(placa: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/vehiculosrest.php/vehiculo/' + placa;
    return this.http.delete(url);
  }
}
