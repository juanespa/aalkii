import { Reservas } from './reservas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReservasService {
  constructor(private http: HttpClient) {}

  // listar
  getResevaDisponibles(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/reservarest.php/reservas';
    return this.http.get(url);
  }

  // modificar
  modificarReserva( reserva: Reservas): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/reservarest.php/reserva/' + reserva.id_reserva;
    return this.http.put(url, reserva);
  }

  // eliminar
  geteliminarCarroDisp(id: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/reservarest.php/reserva/' + id;
    return this.http.delete(url);
  }
}
