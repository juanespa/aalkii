import { CarrDisp } from './carr-disp';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CardisponibleService {
  constructor(private http: HttpClient) {}

  getCarDisponibles(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/carrosdisponiblesrest.php//carrosdisponibles';
    return this.http.get(url);
  }

  modificarCarroDisp(carrDis: CarrDisp): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/carrosdisponiblesrest.php//carrosdisponibles/' + carrDis.placa;
    return this.http.put(url, carrDis);
  }

  geteliminarCarroDisp(placa: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/carrosdisponiblesrest.php//carrosdisponibles/' + placa;
    return this.http.delete(url);
  }
}
