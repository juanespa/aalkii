import { CarrDisp } from './../../carr-disp';
import { CardisponibleService } from './../../cardisponible.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar-disponible',
  templateUrl: './modificar-disponible.component.html',
  styleUrls: ['./modificar-disponible.component.css']
})
export class ModificarDisponibleComponent implements OnInit {
  id: number;
  placa: string;
  fechaini: string;
  fechafin: string;

  constructor(private carrDispService: CardisponibleService, private router: Router,
  private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.placa = this.route.snapshot.paramMap.get('placa');
    this.fechaini = this.route.snapshot.paramMap.get('fechaini');
    this.fechafin = this.route.snapshot.paramMap.get('fechafin');
  }

  modificarCarroDispo() {
    // tslint:disable-next-line:prefer-const
    let carrDisp: CarrDisp = new CarrDisp( this.id, this.placa, this.fechaini, this.fechafin);
    this.carrDispService.modificarCarroDisp(carrDisp)
    .subscribe(resul => {
      alert(resul.message);
      this.router.navigate(['/carrosdisponibles']);
    });
  }

}
